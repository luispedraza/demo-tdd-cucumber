const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require('chai')
const { By } = require('selenium-webdriver')

Given('Usuario ingresa a la plataforma', async function () {
  await this.openChrome('http://127.0.0.1:8089')
})
When('Ingresa nombre {string}', async function (string) {
  await this.chromeDriver.findElement(By.name('nameInput')).sendKeys(string)
})
When('Ingresa CI {int}', async function (int) {
  await this.chromeDriver.findElement(By.name('ciInput')).sendKeys(int)
})
When('Envia los datos', async function () {
  await this.chromeDriver.findElement(By.name('sendButton')).click()
})
Then('Debe recibir el codigo {string}', async function (string) {
  let code = ''
  await this.chromeDriver
    .findElement(By.name('result'))
    .getText()
    .then(function (text) {
      code = text
    })

  expect(code).to.eql(string)
  this.closeChrome()
})
