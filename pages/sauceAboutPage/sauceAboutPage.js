const sauceDictionary = require('./sauceDictionary')

const commands = {
  isOpenAboutPage: function () {
    console.log('Check is address url is equals to' + sauceDictionary.aboutPage)
    return this.CheckUrl(sauceDictionary.aboutPage)
  }
}

module.exports = {
  commands: [commands]
}
