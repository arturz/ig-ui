import { isSlave, master } from 'fork-with-emitter'
import loadPage from './loaders/page'
import loadSubscribers from './loaders/subscibers'
import log from './logs/log'

process.on('unhandledRejection', err => {
  console.error(err)
  process.exit(1)
})

const starting = (async () => {
  console.log('Loading page...')
  const page = await loadPage()
  console.log('Page loaded')
  await loadSubscribers(page)

  log('started')
})()

if(isSlave){
  master.onRequest('start', () => starting)
}