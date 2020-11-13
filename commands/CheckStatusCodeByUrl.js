const request = require('request')

module.exports.command = function (url, statusCode) {
  this.perform(done => {
    request(url, (error, response, body) => {
      this.assert.equal(response.statusCode, statusCode)
      done()
    })
  })
}
