// var assert = require('./assert');
// var chalk = require('chalk');

assert = new Assert();

var subject;
var spacer = 0;

function describe(title, callback) {
  console.log(chalk.magenta(' '.repeat(spacer) + title + ' 🐐'));
  callback();
}

function it(title, callback) {
  // subject = new Thing(); - basically beforeEach functions here
  callback(title);
}

describe('circle', function () {
  describe('radius', function () {
    it('defaults to 10', function (title) {
      assert.isTrue(title, subject.radius == 10);
    });
  });
});
