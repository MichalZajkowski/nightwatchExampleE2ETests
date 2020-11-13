const selectors = require('./theInternetCheckboxesPageSelectors')
const timeout = 3000

const commands = {
  checkFirstCheckBoxAndCheckIfIsChecked: function () {
    const element = selectors.firstCheckbox
    this
      .Click(element, timeout)
      .expect.element(element).to.be.selected
  },

  uncheckSecondCheckBoxAndCheckIfIsNotChecked: function () {
    const element = selectors.secondCheckbox
    this
      .Click(element, timeout)
      .expect.element(element).to.be.not.selected
  }
}

module.exports = {
  commands: [commands],
  elements: selectors
}
