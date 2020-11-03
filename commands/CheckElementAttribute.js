module.exports.command = function (selector, attribute, value, message = 'Element attribute is correct.', position = 1) {
  return this.elements('css selector', selector, elements => {
    this.elementIdAttribute(elements, value[position - 1].ELEMENT, attribute, res => {
      this.assert.ok(res.value.include(value), message)
    })
  })
}
