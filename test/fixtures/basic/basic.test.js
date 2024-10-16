import { Nuxt, Builder } from 'nuxt'

describe('Build fixture', () => {
  let nuxt
  let builder
  let buildDone

  beforeAll(async () => {
    const config = require('./nuxt.config')
    nuxt = new Nuxt(config)
    await nuxt.ready()

    buildDone = jest.fn()

    nuxt.hook('build:done', buildDone)
    builder = await new Builder(nuxt).build()
  })

  test('correct build status', () => {
    expect(builder._buildStatus).toBe(2)
  })

  test('build:done hook called', () => {
    expect(buildDone).toHaveBeenCalledTimes(1)
  })
})
