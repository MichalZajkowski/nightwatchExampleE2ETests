module.exports.command = function (selector, expectedListSize, message = 'Correct list size.') {
  return this.elements('css selector', selector, elements => {
    this.assert.equal(elements.value.length, expectedListSize, message)
  })
}
