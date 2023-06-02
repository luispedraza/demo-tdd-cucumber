"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.sum = function (num1, num2) {
        return num1 + num2;
    };
    Calculator.prototype.mult = function (number1, number2) {
        return number1 * number2;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
