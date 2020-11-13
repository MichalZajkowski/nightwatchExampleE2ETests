module.exports.command = function (url) {
  this.url(function (results) {
    this.assert.strictEqual(results.value, url)
  })
}
