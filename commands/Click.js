module.exports.command = function (selector, timeout) {
  return this
    .waitForElementVisible(selector, timeout)
    .ScrollIntoElement(selector)
    .click(selector)
}
