'use strict';

function expectToBeAPromise(chai) {
  chai.Assertion.addProperty('promise', function () {
    var subject = this._obj;

    var expectedMessage = 'expected #{this} to be a promise';
    var notExpectedMessage = 'expected #{this} not to be a promise';

    var assertion = typeof subject.then === 'function';

    this.assert(assertion, expectedMessage, notExpectedMessage);
  });
}

module.exports = expectToBeAPromise;
