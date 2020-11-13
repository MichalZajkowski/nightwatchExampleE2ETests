module.exports = {
  '@tags': ['theInternet'],
  'Check if checkbox can be checked and unchecked': function (browser) {
    const theInternetHomePage = browser.page.theInternetHomePage()
    const theInternetCheckboxesPage = browser.page.theInternetCheckboxesPage()

    theInternetHomePage.openTheInternetHomePage()
    theInternetHomePage.clickCheckboxButton()
    theInternetCheckboxesPage.checkFirstCheckBoxAndCheckIfIsChecked()
    theInternetCheckboxesPage.uncheckSecondCheckBoxAndCheckIfIsNotChecked()
    browser.end()
  }
}
