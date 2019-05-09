const path = require('path');

module.exports = {
  plugins: {
    view: {
      module: 'nemo-view'
    }
  },
  output: {
    reports: path.resolve('test/functional', 'report')
  },
  profiles: {
    base: {
      tests: path.resolve('test/functional', 'spec/*test.js'),
      driver: {
        browser: 'chrome'
      },
      data: {
        baseUrl: 'https://www.google.com',
        paypalHomeUrl: 'https://www.paypal.com/',
        paypalSigninUrl: 'https://www.paypal.com/us/signin'

      },
      mocha: {
        timeout: 180000,
        reporter: 'mochawesome',
        reporterOptions: {
          quiet: true
        }
      }
    }
  }
}
