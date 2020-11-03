const sauceYourCartPageSelectors = require('./sauceYourCartPageSelectors')

const commands = {
  checkNumberOfProductsInBasket: function (expectedNumberOfProducts) {
    return this.expect.elements(sauceYourCartPageSelectors.listOfProducts).count.equal(expectedNumberOfProducts)
  },

  clickCheckoutButton: function () {
    return this.Click(sauceYourCartPageSelectors.checkoutButton, 5000)
  }
}

module.exports = {
  commands: [commands],
  elements: sauceYourCartPageSelectors
}
