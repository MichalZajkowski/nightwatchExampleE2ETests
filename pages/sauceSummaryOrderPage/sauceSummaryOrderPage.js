const selectors = require('./sauceSummaryOrderPageSelectors')
const dictionary = require('./sauceSummaryOrderPageDictionary')

const commands = {
  checkSummaryOrderInfo: function () {
    this
      .CheckElementVisibile(selectors.summaryInfo, 2000)
      .assert.containsText(
        selectors.summaryInfo,
        dictionary.summaryInfo)
  }
}

module.exports = {
  commands: [commands],
  elements: selectors
}
