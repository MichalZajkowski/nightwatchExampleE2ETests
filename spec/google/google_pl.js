const dictionary = require('../../dictionary/googleDictionary')

module.exports = {
  '@tags': ['Google'],
  'Check google search results, open nightwatch page and check it is correct page': function (browser) {
    const googleWelcomePage = browser.page.googleWelcomePage()
    const googleSearchResult = browser.page.googleSearchResultPage()
    const nightwatchjsPage = browser.page.nightwatchjsPage()

    googleWelcomePage.openGoogleWelcomePag()
    googleWelcomePage.checkMainPage(dictionary.search.googleSearchButton, dictionary.search.googleLuckySearchButton)
    googleWelcomePage.typeSearchTextAndPressEnter(dictionary.searchResult.nightwatchFirstResult, browser)
    googleSearchResult.verifySearchResult()
    googleSearchResult.goToFirstResultSearch()
    // nightwatchjsPage.checkMainTitle()
    // nightwatchjsPage.checkUrl()
    // nightwatchjsPage.checkUrl_v2()
      .end()
  }
}
