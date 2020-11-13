const selectors = require('./sauceYourCartPageSelectors')

const commands = {
  checkNumberOfProductsInBasket: function (expectedNumberOfProducts) {
    return this.expect.elements(selectors.listOfProducts).count.equal(expectedNumberOfProducts)
  },

  clickCheckoutButton: function () {
    return this.Click(selectors.checkoutButton, 5000)
  }
}

module.exports = {
  commands: [commands],
  elements: selectors
}
