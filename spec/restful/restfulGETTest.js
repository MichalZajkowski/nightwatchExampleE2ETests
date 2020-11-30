module.exports = {
  '@tags': ['restful'],
  'Check GET response': function (browser) {
    const restfulGETPage = browser.page.restfulGETPage()

    restfulGETPage.checkResponse()
    browser.end()
  }
}
