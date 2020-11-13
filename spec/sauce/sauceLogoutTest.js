module.exports = {
  '@tags': ['sauce'],
  'Check logout from sauce': function (browser) {
    const sauceLoginPage = browser.page.sauceLoginPage()
    const sauceLoggedUserPage = browser.page.sauceLoggedUserPage()
    const sauceMenuTabPage = browser.page.sauceMenuTabPage()

    sauceLoginPage.openSauceLoginPage()
    sauceLoginPage.loginWithStandardUser()
    sauceLoggedUserPage.checkIsUserLogged()
    sauceLoggedUserPage.openHamburgerMenu()
    sauceMenuTabPage.clickLogout()
    sauceLoginPage.checkIsOpenLoggedUser()
    browser.end()
  }
}
