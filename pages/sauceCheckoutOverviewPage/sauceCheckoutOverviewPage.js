const selectors = require('./sauceCheckoutOverviewPageSelectors')

const commands = {
  clickFinishButton () {
    return this.Click(selectors.finishButton, 1000)
  }
}

module.exports = {
  commands: [commands],
  elements: selectors
}
