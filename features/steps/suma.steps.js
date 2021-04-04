const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");

class Calculator {
  sum(a, b) {
    return a + b;
  }
}

let calculator;
let result;

Given("Una calculadora", function () {
  calculator = new Calculator();
});

When("Se ingresan {int} y {int}", function (int, int2) {
  result = calculator.sum(int, int2);
});

Then("El resultado debe ser {int}", function (int) {
  expect(result).to.be.equal(int);
});
