const theInternetHomePageSelectors = require('./theInternetHomePageSelectors')
const theInternetHomePageDictionary = require('./theInternetHomePageDictionary')

const commands = {
  openTheInternetHomePage: function () {
    return this.api.url(theInternetHomePageDictionary.homePageUrl)
  },

  clickAddAndRemoveElementButton: function () {
    return this.Click(theInternetHomePageSelectors.addRemoveElements, 5000)
  },

  clickStatusCodeButton: function () {
    return this.Click(theInternetHomePageSelectors.statusCode, 5000)
  }
}

module.exports = {
  commands: [commands],
  elements: theInternetHomePageSelectors
}
