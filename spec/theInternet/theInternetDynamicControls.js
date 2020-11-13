module.exports = {
  '@tags': ['theInternet'],
  'Dynamic control': function (browser) {
    const theInternetHomePage = browser.page.theInternetHomePage()
    const theInternetDynamicControlsPage = browser.page.theInternetDynamicControlsPage()

    theInternetHomePage.openTheInternetHomePage()
    theInternetHomePage.clickDynamicControlsButton()
    theInternetDynamicControlsPage.removeCheckboxAndCheck()
    theInternetDynamicControlsPage.enableInputAndCheck()
    browser.end()
  }
}
