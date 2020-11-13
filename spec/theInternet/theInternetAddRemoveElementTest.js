module.exports = {
  '@tags': ['theInternet'],
  'Check add and remove element function': function (browser) {
    const theInternetHomePage = browser.page.theInternetHomePage()
    const theInternetAddAndRemovePage = browser.page.theInternetAddAndRemovePage()

    const elementsToAdd = 10
    const elementsToRemove = 9
    const elementsToLeave = 1

    theInternetHomePage.openTheInternetHomePage()
    theInternetHomePage.clickAddAndRemoveElementButton()
    theInternetAddAndRemovePage.addElements(elementsToAdd)
    theInternetAddAndRemovePage.checkNumberOfElements(elementsToAdd)
    theInternetAddAndRemovePage.removeElements(elementsToRemove)
    theInternetAddAndRemovePage.checkNumberOfElements(elementsToLeave)
    browser.end()
  }
}
