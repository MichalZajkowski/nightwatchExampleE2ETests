module.exports.command = function (browser, text, message = `Element which contains text ${text} was clicked.`) {
    browser
      .useXpath().click("//*[contains(text(),'" + text + "')]")
      .Log(message)
}
