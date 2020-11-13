const selectors = require('./theInternetHomePageSelectors')
const dictionary = require('./theInternetHomePageDictionary')

const commands = {
  openTheInternetHomePage: function () {
    return this.api.url(dictionary.homePageUrl)
  },

  clickAddAndRemoveElementButton: function () {
    return this.Click(selectors.addRemoveElements, 5000)
  },

  clickCheckboxButton: function () {
    return this.Click(selectors.checkboxes, 5000)
  },

  clickDragAndDropButton: function () {
    return this.Click(selectors.dragAndDrop, 5000)
  },

  clickDynamicControlsButton: function () {
    return this.Click(selectors.dynamicControls, 5000)
  },

  clickFileDownloaderButton: function () {
    return this.Click(selectors.fileDownloader, 5000)
  },

  clickStatusCodeButton: function () {
    return this.Click(selectors.statusCode, 5000)
  }
}

module.exports = {
  commands: [commands],
  elements: selectors
}
