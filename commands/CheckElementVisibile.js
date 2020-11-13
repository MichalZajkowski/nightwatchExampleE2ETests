module.exports.command = function (selector, timeout) {
  this.waitForElementVisible(selector, timeout, 'Element with selector ' +
    selector + ' is visible with timeout ' + timeout + " milliseconds")
}
