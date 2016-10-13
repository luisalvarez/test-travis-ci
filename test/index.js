var converter = require("../helpers/converter");

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

var expect = require('chai').expect;
var nock = require('nock');
var getUserFollowers = require('../client').getUserFollowers;

describe('GET followers', function() {
  beforeEach(function() {
    var followersResponse = [{
      "login": "octocat",
      "id": 583231,
      "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/octocat",
      "html_url": "https://github.com/octocat",
      "followers_url": "https://api.github.com/users/octocat/followers",
      "following_url": "https://api.github.com/users/octocat/following{/other_user}",
      "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
      "organizations_url": "https://api.github.com/users/octocat/orgs",
      "repos_url": "https://api.github.com/users/octocat/repos",
      "events_url": "https://api.github.com/users/octocat/events{/privacy}",
      "received_events_url": "https://api.github.com/users/octocat/received_events",
      "type": "User",
      "site_admin": false
    }, {
      "login": "nanocat",
      "id": 583233,
      "avatar_url": "https://avatars.githubusercontent.com/u/583233?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/nanocat",
      "html_url": "https://github.com/nanocat",
      "followers_url": "https://api.github.com/users/nanocat/followers",
      "following_url": "https://api.github.com/users/nanocat/following{/other_user}",
      "gists_url": "https://api.github.com/users/nanocat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/nanocat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/nanocat/subscriptions",
      "organizations_url": "https://api.github.com/users/nanocat/orgs",
      "repos_url": "https://api.github.com/users/nanocat/repos",
      "events_url": "https://api.github.com/users/nanocat/events{/privacy}",
      "received_events_url": "https://api.github.com/users/nanocat/received_events",
      "type": "User",
      "site_admin": false
    }];

    // Mock the TMDB configuration request response
    nock('https://api.github.com')
      .get('/users/octocat/followers')
      .reply(200, followersResponse);
  });

  it('returns users followers', function(done) {

    var username = 'octocat';

    getUserFollowers(username, function(err, followers) {
      // It should return an array object
      expect(Array.isArray(followers)).to.equal(true);
      // Ensure that at least one follower is in the array
      expect(followers).to.have.length.above(1);
      // Each of the items in the array should be a string
      followers.forEach(function(follower) {
        expect(follower).to.be.a('string');
      });
      done();
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

