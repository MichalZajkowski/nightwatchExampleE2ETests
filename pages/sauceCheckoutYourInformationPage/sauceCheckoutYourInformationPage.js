const selectors = require('./sauceCheckoutYourInformationPageSelectors')

const commands = {
  setInformation: function (firstNme, lastName, postalCode) {
    return this
      .SetValue(selectors.firstNameInput, firstNme, 3000)
      .SetValue(selectors.lastNameInput, lastName, 3000)
      .SetValue(selectors.postalCodeInput, postalCode, 3000)
  },

  clickContinueButton: function () {
    return this.Click(selectors.continue, 3000)
  }
}

module.exports = {
  commands: [commands],
  elements: selectors
}
