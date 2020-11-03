const sauceLoginPageSelectors = require('./sauceLoginPageSelectors')
const sauceDictionary = require('./sauceLoginPageDictionary')

const commands = {
  openSauceLoginPage: function () {
    return this.api.url(sauceDictionary.homePageUrl)
  },

  login: function () {
    return this
      .setValue(sauceLoginPageSelectors.loginInput, sauceDictionary.loginDataStandardUser.username)
      .setValue(sauceLoginPageSelectors.passwordInput, sauceDictionary.loginDataStandardUser.password)
      .click(sauceLoginPageSelectors.loginButton)
  },

  checkIsOpenLoggedUser: function () {
    return this
      .CheckUrl(sauceDictionary.loggedUserUrl)
      .CheckTitlePage(sauceDictionary.pageTitle)
  },

  checkIsVisibleErrorLoginInfo: function () {
    return this.CheckElementVisibility(sauceLoginPageSelectors.errorLoginInfo, 5000)
  }
}

module.exports = {
  commands: [commands],
  elements: sauceLoginPageSelectors
}
