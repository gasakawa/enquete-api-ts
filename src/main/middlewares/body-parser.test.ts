import request from 'supertest'

import app from '../config/app'

describe('Body Parser Middleware', () => {
  app.post('/test_body_parser', (req, res) => {
    res.send(req.body)
  })

  test('', async () => {
    await request(app)
      .post('/test_body_parser')
      .send({
        name: 'Gabriel'
      })
      .expect({ name: 'Gabriel' })
  })
})
