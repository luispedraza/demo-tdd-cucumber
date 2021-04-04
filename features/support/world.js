const { setWorldConstructor } = require('@cucumber/cucumber')
const { Builder } = require('selenium-webdriver')

class Calculator {
  sum(a, b) {
    return a + b
  }
}

class BddWorld {
  constructor() {
    // Feature SUMA
    this.calculator = new Calculator()
    this.result = 0
    // Feature Mostrar confirmación de registro
    this.chromeDriver = null
    this.name = ''
    this.ci = 0
  }

  async openChrome(url) {
    if (!this.chromeDriver) {
      this.chromeDriver = await new Builder().forBrowser('chrome').build()
    }
    await this.chromeDriver.get(url)
  }

  async closeChrome() {
    if (this.chromeDriver) {
      await this.chromeDriver.quit()
    }
  }
}

setWorldConstructor(BddWorld)
