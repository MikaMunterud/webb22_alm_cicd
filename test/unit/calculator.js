/* eslint-disable no-undef */
const assert = require('assert');
const { Calculator } = require('../../public/javascripts/calculator');

describe('Calculator', function () {
  let calc;

  beforeEach(function () {
    calc = new Calculator();
  });

  describe('getResult()', function () {
    it('should return 0 when the calculator is created', function () {
      assert.equal(calc.getResult(), 0);
    });
  });

  describe('clearAll()', function () {
    it('should return 0 when calculator is reset', function () {
      calc.add(28);
      calc.clearAll();

      assert.equal(calc.getResult(), 0);
    });
  });

  describe('undo clearAll()', function () {
    it('should return value before clearAll() function', function () {
      calc.add(28);
      calc.subtract(2);
      calc.clearAll();
      calc.undo();

      assert.equal(calc.getResult(), 26);
    });
  });

  describe('clear()', function () {
    it('should return 28 when undoing the latest function', function () {
      calc.add(28);
      calc.add(28);
      calc.clear();

      assert.equal(calc.getResult(), 28);
    });
  });

  describe('undo clear()', function () {
    it('should return 28 when undoing the latest function', function () {
      calc.add(28);
      calc.add(28);
      calc.clear();
      calc.undo();

      assert.equal(calc.getResult(), 56);
    });
  });

  describe('undo()', function () {
    it('should return 28 when undoing the clearAll() function', function () {
      calc.add(28);
      calc.clearAll();
      calc.undo();

      assert.equal(calc.getResult(), 28);
    });
  });

  describe('Multiply', function () {
    it('should return sum of 4 * 4', function () {
      calc.add(4);
      calc.multiply(4);

      assert.equal(calc.getResult(), 16);
    });
  });

  describe('undo Multiply', function () {
    it('should return sum of 4 * 4 and undo the second multiplication of 4', function () {
      calc.add(4);
      calc.multiply(4);
      calc.multiply(4);
      calc.undo();

      assert.equal(calc.getResult(), 16);
    });
  });

  describe('Subtract', function () {
    it('should return sum of 10 - 2', function () {
      calc.add(10);
      calc.subtract(2);

      assert.equal(calc.getResult(), 8);
    });
  });

  describe('undo Subtract', function () {
    it('should return sum of 10 - 2 and undo the second subtract of 4', function () {
      calc.add(10);
      calc.subtract(2);
      calc.subtract(4);
      calc.undo();

      assert.equal(calc.getResult(), 8);
    });
  });

  describe('Divide', function () {
    it('should return sum of 10 / 2', function () {
      calc.add(10);
      calc.divide(2);

      assert.equal(calc.getResult(), 5);
    });
  });

  describe('undo Divide', function () {
    it('should return sum of 20 / 2 and undo the second divide of 2', function () {
      calc.add(20);
      calc.divide(2);
      calc.divide(2);
      calc.undo();

      assert.equal(calc.getResult(), 10);
    });
  });

  describe('Add', function () {
    it('should return sum of 2 + 3', function () {
      calc.add(2);
      calc.add(3);

      assert.equal(calc.getResult(), 5);
    });
  });

  describe('undo Add', function () {
    it('should return 20 and undo the second addition of number 3', function () {
      calc.add(20);
      calc.add(3);
      calc.undo();

      assert.equal(calc.getResult(), 20);
    });
  });
});
