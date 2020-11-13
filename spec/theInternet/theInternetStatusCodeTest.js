module.exports = {
  '@tags': ['theInternet'],
  'Status code': function (browser) {
    const theInternetStatusCodePage = browser.page.theInternetStatusCodePage()

    theInternetStatusCodePage.checkStatusCode200()
    theInternetStatusCodePage.checkStatusCode301()
    theInternetStatusCodePage.checkStatusCode404()
    theInternetStatusCodePage.checkStatusCode500()
    browser.end()
  }
}
