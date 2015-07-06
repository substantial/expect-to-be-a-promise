# expect-to-be-a-promise
A chai matcher to assert the return value of a function is a thenable.

### Usage
```javascript
var chai = require('chai');
var expectToBeAPromise = require('expect-to-be-a-promise');

chai.use(expectToBeAPromise);

function doThing() {
  return new Promise(function(resolve, reject) {
    resolve('some value');
  });
}

it('is a promise', function() {
  expect(doThing()).to.be.a.promise;
});
```
