module.exports.command = function (titleText, message = 'Page title is correct.') {
  return this.getTitle(() => {
    this.assert.title(titleText, message)
  })
}
