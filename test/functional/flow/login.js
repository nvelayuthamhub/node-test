'use strict';

var Nemo = require('nemo');

var util = require('../util');

var Login = function (nemo) {
  this.nemo = nemo;
};

var _enterLoginForm = function (nemo, user, pass) {
  nemo.driver.get(nemo.data.paypalUrl);
  util.waitForJSReady(nemo);
  nemo.view.login.emailWaitVisible().sendKeys(user);
  nemo.view.login.password().sendKeys(pass);
  return nemo.view.login.button().click();
}
Login.prototype.loginSuccess = function(user, pass) {
  _enterLoginForm(this.nemo, user, pass);
  return this.nemo.view.login.successWait();
};

Login.prototype.logout = function() {
  this.nemo.view.nav.logoutLink().click();
  return this.nemo.view.login.emailWaitVisible();
};


module.exports = Login;