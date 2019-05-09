const assert = require('assert');

var util = require('../util');

describe('@Login@', function () {

  it('should load a website', async function () {

    let nemo = this.nemo;

    await nemo.driver.get(nemo.data.paypalHomeUrl);
    await nemo.snap();
    await nemo.waitSeconds;

    // Click on the login button from header
    await nemo.view._present('#ul-btn');
    await nemo.view._find('#ul-btn').click();

    await nemo.snap();

    // Enter email address
    await nemo.view._present('#email');
    await nemo.view._find('#email').sendKeys('consumerexptest010@paypal.com');
    await nemo.view._find('#btnNext').click();

    // Wait for the spinner
    await nemo.snap();
    await nemo.snap();
    await nemo.snap();
    await nemo.snap();


    // Enter password
    await nemo.view._present('#password');
    await nemo.view._find('#password').sendKeys('3x@gj5wkl6!ac');
    await nemo.view._find('#btnLogin').click();

    await nemo.snap();
    await nemo.snap();


    await nemo.driver.get(nemo.data.paypalHomeUrl);

    // Pass through extra security
    //await nemo.view._present('[class=scTrack:not-now notNowClientCal]');
    //await nemo.view._find('[class=scTrack:not-now notNowClientCal]').click();

    // Check if the main content section is available
    await nemo.view._present('#contents');
    await nemo.snap();

    // Assert if the logged in name is correct


  });
});


