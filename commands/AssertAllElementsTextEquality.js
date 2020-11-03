module.exports.command = function (selector, expectedText, message, timeoutInSec) {
  return this
    .CheckElementVisibility(selector, timeoutInSec)
    .assert.containsText(selector, expectedText, message)
}
