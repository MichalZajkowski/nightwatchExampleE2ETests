const sauceMenuTabPageSelectors = require('./sauceMenuTabPageSelectors')

const commands = {
  openAppItemsPage: function () {
    return this
      .CheckElementVisibility(sauceMenuTabPageSelectors.about, 5000)
      .click(sauceMenuTabPageSelectors.allItems)
  },

  openAboutPage: function () {
    return this
      .CheckElementVisibility(sauceMenuTabPageSelectors.about, 5000)
      .click(sauceMenuTabPageSelectors.about)
  },

  clickLogout: function () {
    return this
      .CheckElementVisibility(sauceMenuTabPageSelectors.about, 5000)
      .click(sauceMenuTabPageSelectors.logout)
  },

  openResetAppStorePage: function () {
    return this
      .CheckElementVisibility(sauceMenuTabPageSelectors.about, 5000)
      .click(sauceMenuTabPageSelectors.resetAppStore)
  }
}

module.exports = {
  commands: [commands],
  elements: sauceMenuTabPageSelectors
}
