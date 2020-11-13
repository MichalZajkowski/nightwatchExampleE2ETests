module.exports.command = function (selector, timeout) {
  this.waitForElementNotVisible(selector, timeout, 'Element with selector ' +
    selector + ' is visible with timeout ' + timeout + " milliseconds")
}
