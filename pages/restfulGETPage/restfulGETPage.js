const dictionary = require('./restfulGETDictionary')

const commands = {
  checkResponse: function () {
    return this.ApiGet(dictionary.url, response => {
      const body = JSON.parse(response.body)
      body.forEach(element =>
        console.log(element.bookingid)
      )
    })
  }
}

module.exports = {
  commands: [commands]
}
