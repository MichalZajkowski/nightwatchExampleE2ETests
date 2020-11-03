module.exports = {
  '@tags': ['sauce'],
  'Go to about us page': function (browser) {
    const sauceLoginPage = browser.page.sauceLoginPage()
    const sauceMenuTabPage = browser.page.sauceMenuTabPage()
    const sauceAboutPage = browser.page.sauceAboutPage()
    const sauceLoggedUserPage = browser.page.sauceLoggedUserPage()

    sauceLoginPage.openSauceLoginPage()
    sauceLoginPage.login()
    sauceLoggedUserPage.openHamburgerMenu()
    sauceMenuTabPage.openAboutPage()
    sauceAboutPage.isOpenAboutPage()
  }
}
