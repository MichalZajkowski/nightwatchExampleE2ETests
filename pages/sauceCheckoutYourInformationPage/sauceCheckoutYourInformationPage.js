const sauceCheckoutYourInformationPageSelectors = require('./sauceCheckoutYourInformationPageSelectors')

const commands = {
  setInformation: function (firstNme, lastName, postalCode) {
    return this
      .SetValue(sauceCheckoutYourInformationPageSelectors.firstNameInput, firstNme, 3000)
      .SetValue(sauceCheckoutYourInformationPageSelectors.lastNameInput, lastName, 3000)
      .SetValue(sauceCheckoutYourInformationPageSelectors.postalCodeInput, postalCode, 3000)
  },

  clickContinueButton: function () {
    return this.Click(sauceCheckoutYourInformationPageSelectors.continue, 3000)
  }
}

module.exports = {
  commands: [commands],
  elements: sauceCheckoutYourInformationPageSelectors
}
