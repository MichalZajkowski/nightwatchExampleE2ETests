const sauceSummaryOrderPageSelectors = require('./sauceSummaryOrderPageSelectors')
const sauceSummaryOrderPageDictionary = require('./sauceSummaryOrderPageDictionary')

const commands = {
  checkSummaryOrderInfo: function () {
    return this
      .CheckElementVisibility(sauceSummaryOrderPageSelectors.summaryInfo, 2000)
      .assert.containsText(
        sauceSummaryOrderPageSelectors.summaryInfo,
        sauceSummaryOrderPageDictionary.summaryInfo)
  }
}

module.exports = {
  commands: [commands],
  elements: sauceSummaryOrderPageSelectors
}
