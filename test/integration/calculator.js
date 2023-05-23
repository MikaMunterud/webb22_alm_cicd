/* eslint-disable consistent-return */
/* eslint-disable radix */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
const request = require('supertest');
const assert = require('assert');
const app = require('../../app');
// const { Calculator } = require('../../public/javascripts/calculator');

describe('Calculator', function () {
  it('should return 0 when the calculator is created', function () {
    request(app)
      .get('/calc')
      .end((err, res) => {
        if (err) return done(err);

        const result = parseInt(res.text.match(/<h2>Result: (\d+)<\/h2>/)[1]);

        assert.strictEqual(result, 0);
      });
  });
});
