module.exports = {
  '@tags': ['sauce'],
  'Check login to sauce': function (browser) {
    const sauceLoginPage = browser.page.sauceLoginPage()
    const sauceLoggedUserPage = browser.page.sauceLoggedUserPage()

    sauceLoginPage.openSauceLoginPage()
    sauceLoginPage.loginWithStandardUser()
    sauceLoggedUserPage.checkIsUserLogged()
    browser.end()
  }
}
