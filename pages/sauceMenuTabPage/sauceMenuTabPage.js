const selectors = require('./sauceMenuTabPageSelectors')

const commands = {
  openAppItemsPage: function () {
    return this
      .CheckElementVisibility(selectors.about, 5000)
      .click(selectors.allItems)
  },

  openAboutPage: function () {
    return this
      .CheckElementVisibile(selectors.about, 5000)
      .click(selectors.about)
  },

  clickLogout: function () {
    return this
      .CheckElementVisibile(selectors.about, 5000)
      .click(selectors.logout)
  },

  openResetAppStorePage: function () {
    return this
      .CheckElementVisibile(selectors.about, 5000)
      .click(selectors.resetAppStore)
  }
}

module.exports = {
  commands: [commands],
  elements: selectors
}
