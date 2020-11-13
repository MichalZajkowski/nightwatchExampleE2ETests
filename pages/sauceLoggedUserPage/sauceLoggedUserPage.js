const selectors = require('./sauceLoggedUserPageSelectors')
const dictionary = require('./sauceLoggedUserPageDictionary')

const commands = {
  checkIsUserLogged: function () {
    return this.api.assert.visible(
      selectors.shoppingCardIcon,)
  },

  openHamburgerMenu: function () {
    return this.click(
      selectors.hamburgerMenu)
  },

  clickFirstAddToBaskedButton: function () {
    return this.Click(selectors.inventoryItemAddToCartButton, 5000)
  },

  clickCardImageAndGoShoppingList: function () {
    return this.Click(selectors.cardImage, 5000)
  },

  checkIfFirstItemIsInBasked: function () {
    return this.AssertAllElementsTextEquality(
      selectors.inventoryItemAddToCartButton,
      dictionary.remove,
      'Element added to basked',
      5000)
  }
}

module.exports = {
  commands: [commands],
  elements: selectors
}
