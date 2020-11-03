const sauceLoggedUserPageSelectors = require('./sauceLoggedUserPageSelectors')
const sauceLoggedUserPageDictionary = require('./sauceLoggedUserPageDictionary')

const commands = {
  checkIsUserLogged: function () {
    return this.api.assert.visible(
      sauceLoggedUserPageSelectors.shoppingCardIcon,)
  },

  openHamburgerMenu: function () {
    return this.click(
      sauceLoggedUserPageSelectors.hamburgerMenu)
  },

  clickFirstAddToBaskedButton: function () {
    return this.Click(sauceLoggedUserPageSelectors.inventoryItemAddToCartButton, 5000)
  },

  clickCardImageAndGoShoppingList: function () {
    return this.Click(sauceLoggedUserPageSelectors.cardImage, 5000)
  },

  checkIfFirstItemIsInBasked: function () {
    return this.AssertAllElementsTextEquality(
      sauceLoggedUserPageSelectors.inventoryItemAddToCartButton,
      sauceLoggedUserPageDictionary.remove,
      'Element added to basked',
      5000)
  }
}

module.exports = {
  commands: [commands],
  elements: sauceLoggedUserPageSelectors
}
