module.exports = {
  '@tags': ['sauce'],
  'Check if user can buy one product': function (browser) {
    const sauceLoginPage = browser.page.sauceLoginPage()
    const sauceLoggedUserPage = browser.page.sauceLoggedUserPage()
    const sauceYourCartPage = browser.page.sauceYourCartPage()
    const sauceCheckoutYourInformationPage = browser.page.sauceCheckoutYourInformationPage()
    const sauceCheckoutOverviewPage = browser.page.sauceCheckoutOverviewPage()
    const sauceSummaryOrderPage = browser.page.sauceSummaryOrderPage()

    const firstName = 'Jan'
    const lastName = 'Kowalski'
    const postalCode = '00-000'

    sauceLoginPage.openSauceLoginPage()
    sauceLoginPage.login()
    sauceLoggedUserPage.clickFirstAddToBaskedButton()
    sauceLoggedUserPage.clickCardImageAndGoShoppingList()
    sauceYourCartPage.checkNumberOfProductsInBasket(1)
    sauceYourCartPage.clickCheckoutButton()
    sauceCheckoutYourInformationPage.setInformation(firstName, lastName, postalCode)
    sauceCheckoutYourInformationPage.clickContinueButton()
    sauceCheckoutOverviewPage.clickFinishButton()
    sauceSummaryOrderPage.checkSummaryOrderInfo()
  }
}
