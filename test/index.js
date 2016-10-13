var converter = require("../helpers/converter");

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});


// addition test
describe('Basic Operations', function() {
 	it('Find the sum of 9 and 8.', function() {
		assert.equal(9+8, 17);
	});
	it('Find the difference between 7064 and 489.', function() {
		assert.equal(7064 - 489, 6575);
	});
});


describe("Color Code Converter", function() {
  describe("RGB to Hex conversion", function() {
    it("converts the basic colors", function() {
      var redHex   = converter.rgbToHex(255, 0, 0);
      var greenHex = converter.rgbToHex(0, 255, 0);
      var blueHex  = converter.rgbToHex(0, 0, 255);

      assert.equal(redHex, "ff0000");
      assert.equal(greenHex, "00ff00");
      assert.equal(blueHex, "0000ff");
    });
  });
});