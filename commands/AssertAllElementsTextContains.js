module.exports.command = function (selector, expectedText, message, timeoutInSec) {
  return this.elements('css selector', selector, elements => {
    if (elements.value.length === 0) {
      this.LogError('No elements found.')
    }
    for (let i = 0; i < elements.value.length; i++) {
      this.AsserTextEquality(selector, expectedText, message, i + 1, timeoutInSec, true)
    }
  })
}
