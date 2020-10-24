const googleSearchResultPageSelectors = require('./googleSearchResultSelectors')
const googleDictionary = require('../../dictionary/googleDictionary')
const commands = {

  verifySearchResult: function () {
    return this
      .getText(googleSearchResultPageSelectors.firstResult, function (result) {
        console.log(result.value)
        this.assert.strictEqual(result.value, googleDictionary.searchResult.nightwatchFirstResult) // only when using Selenium / JSONWire
      })
  },

  goToFirstResultSearch: function () {
    return this
      .click(googleSearchResultPageSelectors.firstSearchValueResult)
  }
}

module.exports = {
  commands: [commands],
  elements: googleSearchResultPageSelectors
}
