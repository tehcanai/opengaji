import { Hono } from 'hono'
import { renderer } from './renderer'
import IndexPage from './components/page/index/index'

const app = new Hono()

app.use(renderer)

app.get('*', renderer)

app.get('/', (c) => {
  return c.render(IndexPage())
})

export default app
