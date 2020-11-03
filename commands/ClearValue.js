module.exports.command = function (selector, timeout, message = 'Clear value: ${selector}') {
  return this
    .waitForElementVisible(selector, timeout)
    .ScrollIntoElement(selector)
    .clearValue(selector)
}
