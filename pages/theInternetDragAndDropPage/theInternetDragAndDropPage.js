const selectors = require('./theInternetDragAndDropPageSelectors')
const dragAndDrop = require('html-dnd').codeForSelectors;

const commands = {
  dragElementAToElementB: function (browser) {
    browser.execute(dragAndDrop, [
      selectors.elementA,
      selectors.elementB]);
  }
}

module.exports = {
  commands: [commands],
  elements: selectors
}
