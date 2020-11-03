module.exports.command = function (selector, input, timeout) {
  return this
    .waitForElementVisible(selector, timeout)
    .ScrollIntoElement(selector)
    .setValue('css selector', selector, input)
}
