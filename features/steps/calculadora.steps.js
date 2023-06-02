"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("@cucumber/cucumber");
var calculator_1 = require("../../src/calculator");
var chai_1 = require("chai");
var calculator;
var sum;
var mult;
cucumber_1.Given("Tengo una calculadora", function () {
    calculator = new calculator_1.Calculator();
});
cucumber_1.When("Se ingresan {int} y {int}", function (num1, num2) {
    // When('Se ingresan {int} y {float}', function (int, float) {
    // When('Se ingresan {float} y {int}', function (float, int) {
    // When('Se ingresan {float} y {float}', function (float, float2) {
    // Write code here that turns the phrase above into concrete actions
    sum = calculator.sum(num1, num2);
});
cucumber_1.Then("El resultado debe ser {int}", function (result) {
    // Then('El resultado debe ser {float}', function (float) {
    // Write code here that turns the phrase above into concrete actions
    chai_1.expect(sum).to.be.equal(result);
});
cucumber_1.When('ingreso los numeros {int} y {int} para multiplicar', function (number1, number2) {
    // When('ingreso los numeros {int} y {float} para multiplicar', function (int, float) {    
    // When('ingreso los numeros {float} y {int} para multiplicar', function (float, int) {    
    // When('ingreso los numeros {float} y {float} para multiplicar', function (float, float2) {
    // Write code here that turns the phrase above into concrete actions
    mult = calculator.mult(number1, number2);
});
cucumber_1.Then('el resultado debe ser {int}', function (result) {
    chai_1.expect(mult).to.be.equal(result);
});
