const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require('chai')

Given('Una calculadora', function () {
  // ya en world se creo la calculadora
})

When('Se ingresan {int} y {int}', function (int, int2) {
  this.result = this.calculator.sum(int, int2)
})

Then('El resultado debe ser {int}', function (int) {
  expect(this.result).to.be.equal(int)
})
