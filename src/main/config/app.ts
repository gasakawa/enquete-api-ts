import express from 'express'
import setupMiddlewares from './middlewares'

const app = express()

// middlewares setup
setupMiddlewares(app)

export default app
