const selectors = require('./theInternetDynamicControlsPageSelectors')
const timeout = 10000

const commands = {
  removeCheckboxAndCheck: function () {
    this
      .CheckElementVisibile(selectors.checkbox, timeout)
      .Click(selectors.removeOrAddCheckbox, timeout)
      .expect.element(selectors.checkbox).to.not.be.present.after(timeout)
  },

  enableInputAndCheck: function () {
    this
      .CheckElementVisibile(selectors.input, timeout)
      .Click(selectors.enableOrDisableInput, timeout)
      .expect.element(selectors.input).to.be.enabled.after(timeout)
  }
}

module.exports = {
  commands: [commands],
  elements: selectors
}
