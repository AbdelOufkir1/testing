const request = require('supertest');
const {app,} = require('../app');

test('Passing in empty body returns 400', done => {
    request(app)
      .post('/user')
      .send({})
      .then((response) => {
        expect(response.status).toBe(400);
        done();
      });
})