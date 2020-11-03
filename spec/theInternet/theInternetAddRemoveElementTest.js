module.exports = {
  '@tags': ['the Internet'],
  'Check add and remove element function': function (browser) {
    const theInternetHomePage = browser.page.theInternetHomePage()

    theInternetHomePage.openTheInternetHomePage()
    debugger
    theInternetHomePage.clickStatusCodeButton()

  }
}
