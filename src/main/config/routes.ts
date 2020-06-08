import { Express, Router } from 'express'
import fg from 'fast-glob'

export default (app: Express): void => {
  const router = Router()

  app.use('/api', router)

  // search for all files with routes.ts in the name
  // after found import those files and inject them into router
  fg.sync('**/src/main/routes/**routes.ts').map(async file =>
    (await import(`../../../${file}`)).default(router)
  )
}
