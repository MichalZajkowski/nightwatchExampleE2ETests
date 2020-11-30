module.exports = {
  '@tags': ['sauce'],
  'Check main page': function (browser) {
    const sauceLoginPage = browser.page.sauceLoginPage()
    const sauceLoggedUserPage = browser.page.sauceLoggedUserPage()

    sauceLoginPage.openSauceLoginPage()
    sauceLoginPage.loginWithStandardUser()
    sauceLoggedUserPage.checkIsUserLogged()
    sauceLoggedUserPage.printAllItemsNames(browser)

    browser.end()
  }
}
