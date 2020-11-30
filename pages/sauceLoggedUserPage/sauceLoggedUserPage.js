const selectors = require('./sauceLoggedUserPageSelectors')
const dictionary = require('./sauceLoggedUserPageDictionary')

const commands = {
  checkIsUserLogged: function () {
    return this.api.assert.visible(
      selectors.shoppingCardIcon)
  },

  selectFirstItem: function (browser) {
    this.ClickByText(browser,"Sauce Labs Backpack")
  },

  printAllItemsNames: function(browse) {
    return browse.elements('css selector', selectors.inventoryItemName, elements =>{
      elements.value.forEach(el =>{
        console.log(Object.values(el)[0])
      })
    })
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
