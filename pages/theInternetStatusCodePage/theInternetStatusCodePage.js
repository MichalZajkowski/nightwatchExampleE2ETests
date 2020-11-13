const dictionary = require('./theInternetStatusCodePageDictionary')

const commands = {
  checkStatusCode200: function () {
    this.CheckStatusCodeByUrl(dictionary.url.url200, dictionary.statusCode.status200)
  },

  checkStatusCode301: function () {
    this.CheckStatusCodeByUrl(dictionary.url.url301, dictionary.statusCode.status301)
  },

  checkStatusCode404: function () {
    this.CheckStatusCodeByUrl(dictionary.url.url404, dictionary.statusCode.status404)
  },

  checkStatusCode500: function () {
    this.CheckStatusCodeByUrl(dictionary.url.url500, dictionary.statusCode.status500)
  }
}

module.exports = {
  commands: [commands]
}
