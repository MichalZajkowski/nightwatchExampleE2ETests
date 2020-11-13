const HtmlReporter = require('nightwatch-html-reporter')

const reporter = new HtmlReporter({
  openBrowser: false,
  reportsDirectory: 'reports',
  separateReportPerSuite: true
})

module.exports = {
  before: function (done) {
    console.log('Setting up...')
    done()
  },

  after: function (done) {
    console.log('Closing down...')
    done()
  },

  beforeEach: function (done) {
    console.log('Setting up... beforeEach')
    done()
  },

  afterEach: function (done) {
    console.log('Closing down... afterEach')
    done()
  }
}
