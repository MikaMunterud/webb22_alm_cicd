class Calculator {
  constructor() {
    this.calculatorResult = 0;
    this.previousValue = 0;
    this.undoValue = 0;
    this.hide = ['constructor', 'methods', 'result'];
  }

  methods() {
    return Object.getOwnPropertyNames(Calculator.prototype).filter(
      (method) => !this.hide.includes(method),
    );
  }

  multiply(factor) {
    this.previousValue = this.calculatorResult;
    this.undoValue = this.calculatorResult;
    this.calculatorResult *= factor;
  }

  subtract(value) {
    this.previousValue = this.calculatorResult;
    this.undoValue = this.calculatorResult;
    this.calculatorResult -= value;
  }

  divide(divisor) {
    this.previousValue = this.calculatorResult;
    this.undoValue = this.calculatorResult;
    this.calculatorResult /= divisor;
  }

  add(value) {
    this.previousValue = this.calculatorResult;
    this.undoValue = this.calculatorResult;
    this.calculatorResult += value;
  }

  clear() {
    this.undoValue = this.calculatorResult;
    this.calculatorResult = this.previousValue;
  }

  clearAll() {
    this.undoValue = this.calculatorResult;
    this.previousValue = this.calculatorResult;
    this.calculatorResult = 0;
  }

  undo() {
    this.calculatorResult = this.undoValue;
  }

  getResult() {
    return this.calculatorResult;
  }
}

module.exports = { Calculator };
