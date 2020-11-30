const util = require('util')
const events = require('events')

function ApiGet () {
}

util.inherits(ApiGet, events.EventEmitter)

ApiGet.prototype.command = function (apiUrl, success) {
  const request = require('request')
  request.get(apiUrl, function (error, response) {
    if (error) {
      console.log(error)
      return
    }
    success(response)
    this.emit('complete')
  }.bind(this))
}

module.exports = ApiGet
