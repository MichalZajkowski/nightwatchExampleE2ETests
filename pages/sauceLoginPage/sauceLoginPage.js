const selectors = require('./sauceLoginPageSelectors')
const dictionary = require('./sauceLoginPageDictionary')

const commands = {
  openSauceLoginPage: function () {
    return this.api.url(dictionary.homePageUrl)
  },

  loginWithStandardUser: function () {
    return this
      .setValue(selectors.loginInput, dictionary.loginDataStandardUser.username)
      .setValue(selectors.passwordInput, dictionary.loginDataStandardUser.password)
      .click(selectors.loginButton)
  },

  loginWithBlockedUser: function () {
    return this
      .setValue(selectors.loginInput, dictionary.loginDataLockedOutUser.username)
      .setValue(selectors.passwordInput, dictionary.loginDataLockedOutUser.password)
      .click(selectors.loginButton)
  },

  checkIsOpenLoggedUser: function () {
    return this
      .CheckUrl(dictionary.loggedUserUrl)
      .CheckTitlePage(dictionary.pageTitle)
  },

  checkIsVisibleErrorLoginInfo: function () {
    this.CheckElementVisibile(selectors.errorLoginInfo, 5000)
  }
}

module.exports = {
  commands: [commands],
  elements: selectors
}
