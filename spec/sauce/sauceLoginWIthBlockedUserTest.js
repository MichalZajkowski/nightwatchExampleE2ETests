module.exports = {
  '@tags': ['sauce'],
  'Check login to sauce with blocked user': function (browser) {
    const sauceLoginPage = browser.page.sauceLoginPage()

    sauceLoginPage.openSauceLoginPage()
    sauceLoginPage.loginWithBlockedUser()
    sauceLoginPage.checkIsVisibleErrorLoginInfo()
    browser.end()
  }
}
