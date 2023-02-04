import { describe, it, expect, test, afterAll } from '@jest/globals'
import supertest from 'supertest'
import mongoose from 'mongoose'

import app from '../app'
import { server } from '../index'

describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true)
  })
})

// ----------Pipeline check-------------------

describe('user', () => {
  afterAll(() => {
    mongoose.connection.close()
    server.close()
  })

  describe('GET /healthCheckApi', () => {
    test('should respond with Ok', async () => {
      const response = await supertest(app).get('/healthCheckApi').send()
        .expect('Content-type', /json/)
      expect(response.statusCode).toBe(200)
      expect(response.body).toBeInstanceOf(Object)
      expect(response.body.ok).toBe('Ok')
    })
  })
})
