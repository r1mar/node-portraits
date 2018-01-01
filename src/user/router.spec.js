var app = require('../app');
var request = require("request");

var base_url = "http://localhost:3000"

describe("User router", function () {

  var server;

  beforeEach(function (done) {
    // starts the server
    server = app.listen( { port: 3000 }, done);
  });

  afterEach(function () {
    server.close();
  });

  describe("GET /user", function () {
    it("returns status code 200", function (done) {

      request.get(base_url + '/user', function (error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });

});