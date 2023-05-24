/* eslint-disable no-undef */
const assert = require('assert');
const { Calculator } = require('../../public/javascripts/calculator');

describe('Calculator', function () {
  let calc;

  beforeEach(function () {
    calc = new Calculator();
  });

  describe('Add', function () {
    it('should return sum of 2 + 3', function () {
      calc.add(2);
      calc.add(3);

      assert.equal(calc.getResult(), 6);
    });
  });
});
