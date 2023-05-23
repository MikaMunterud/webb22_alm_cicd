/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const request = require('supertest');
const assert = require('assert');

describe('Supertest against remote', function () {
  it('hello nginx', function () {
    return request('http://localhost:8080')
      .get('/')
      .expect('Content-Type', /text/)
      .expect(200);
  });
});
