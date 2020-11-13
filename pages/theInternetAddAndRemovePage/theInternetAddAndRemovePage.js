const selectors = require('./theInternetAddAndRemovePageSelectors')

const commands = {
  addElements: function (numberOfElements) {
    for (let i = 0; i < numberOfElements; i++) {
      this.Click(selectors.addElementButton, 5000)
    }
  },

  checkNumberOfElements: function (numberOfElements) {
    this.AssertListElementsNumber(selectors.removeElementButtonList, numberOfElements)
  },

  removeElements: function (numberOfElements) {
    for (let i = 0; i < numberOfElements; i++) {
      this.Click(selectors.removeElementButtonList, 1000)
    }
  }
}

module.exports = {
  commands: [commands],
  elements: selectors
}
