const sauceCheckoutOverviewPageSelectors = require('./sauceCheckoutOverviewPageSelectors')

const commands = {
  clickFinishButton () {
    return this.Click(sauceCheckoutOverviewPageSelectors.finishButton, 1000)
  }
}

module.exports = {
  commands: [commands],
  elements: sauceCheckoutOverviewPageSelectors
}
