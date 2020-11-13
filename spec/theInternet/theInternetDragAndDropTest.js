module.exports = {
  '@tags': ['theInternet'],
  'Drag and drop element': function (browser) {
    const theInternetHomePage = browser.page.theInternetHomePage()
    const theInternetDragAndDropPage = browser.page.theInternetDragAndDropPage()

    theInternetHomePage.openTheInternetHomePage()
    theInternetHomePage.clickDragAndDropButton()
    theInternetDragAndDropPage.dragElementAToElementB(browser)
    browser.end()
  }
}
