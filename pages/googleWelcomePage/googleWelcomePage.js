const googleWelcomePageSelectors = require('./googleWelcomeSelectors')

const commands = {

  openGoogleWelcomePag: function () {
    return this.api.url('https://google.pl')
  },
  checkMainPage: function (googleSearchButton, googleLuckySearchButton) {
    return this
      .assert.value(googleWelcomePageSelectors.searchButton, googleSearchButton, 'Check search button text')
      .assert.value(googleWelcomePageSelectors.luckySearch, googleLuckySearchButton, 'Check lucky search button text')
  },
  typeSearchTextAndPressEnter: function (searchText, browser) {
    return this
      .setValue(googleWelcomePageSelectors.searchInput, searchText)
      .sendKeys(googleWelcomePageSelectors.searchInput, browser.Keys.ENTER)
  }
}

module.exports = {
  commands: [commands],
  elements: googleWelcomePageSelectors
}
