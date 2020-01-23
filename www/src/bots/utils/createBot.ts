import { resolve } from 'path'
import chalk from 'chalk'
import { createSlave, Slave } from 'fork-with-emitter'
import { chunksToLinesAsync, chomp } from '@rauschma/stringio'

export interface ExecuteSupervisorCommand {
  name: string
  payload?: string
}

export type Bot = {
  info: { startedAt: number },
  slave: Slave,
  exit: () => any,
  executeSupervisor: (ExecuteSupervisorCommand) => Promise<any>,
  getSupervisors: () => Promise<any>
}

const createBot = async (cookies: Object = {}, beforeLoad?: (Slave) => any) => {
  const bot = createSlave('app.js', {
    cwd: resolve('../bot/dist/'),
    env: {
      LOGIN: process.env.LOGIN,
      PASSWORD: process.env.PASSWORD,
      NODE_ENV: process.env.NODE_ENV,
      HEADLESS: '1',
      CONTROLLED: '1',
      COOKIES: JSON.stringify(cookies)
    }
  })

  if(beforeLoad !== undefined)
    beforeLoad(bot)

  ;(async () => {
    for await (const line of chunksToLinesAsync(bot.fork.stdout))
      console.log(chalk.yellow(chomp(line)))
  })()

  ;(async () => {
    for await (const line of chunksToLinesAsync(bot.fork.stderr))
      console.log(chalk.red(chomp(line)))
  })()

  await bot.request('start', null, 120)

  const startedAt = +new Date

  return {
    info: {
      startedAt
    },
    slave: bot,
    exit(){
      bot.emit('exit')
    },
    async executeSupervisor(executeSupervisorCommand: ExecuteSupervisorCommand){
      try {
        return await bot.request('executeSupervisor', executeSupervisorCommand, 60*30)
      } catch(error) {
        throw new Error(error)
      }
    },
    async getSupervisors(){
      return bot.request('getSupervisors')
    }
  }
}

export default createBot