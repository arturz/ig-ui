import express from 'express'
import next from 'next'
import execa from 'execa'
import { resolve } from 'path'
import chalk from 'chalk'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: './client' })
const handle = app.getRequestHandler()

const handleBotLog = (log?: string) => {
  if(log === undefined)
    return
  
  console.log(
    'Bot:', chalk.cyan(Buffer.from(log, 'utf-8').toString().trim())
  )
}

;(async () => {
  try {
    await app.prepare()
  } catch(error) {
    console.log(error)
    return
  }

  const server = express()
  server.use(express.json())

  let bot: any = null

  server.post('/start', (req, res) => {
    if(bot !== null){
      res.json({ ok: true })
      return
    }

    console.log(`Starting bot...`)
    bot = execa.node(
      resolve('../bot'),
      ['build/app'],
      //@ts-ignore
      { cwd: resolve('../bot') }
    )
    bot.on('close', () => {
      bot = null
      console.log(`Bot was closed`)
    })
    bot.stdout.on('data', handleBotLog)
    bot.stdout.on('end', handleBotLog)
    

    res.json({ ok: true })
  })

  server.post('/execute', (req, res) => {
    if(bot === null)
      return

    bot.send({ 
      type: req.body.type,
      payload: req.body.payload
    })

    res.json(req.body)
  })

  server.get('/active', (req, res) => {
    if(bot === null){
      res.json(false)
      return
    }

    res.json(true)
  })

  server.get('/favicon.ico', (req, res) => (
    res.status(200).sendFile('favicon.ico', { root: __dirname + '/client/static/' })
  ))

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if(err)
      throw err

    if(dev)
      console.log('> Ready on http://localhost:3000')
  })
})()