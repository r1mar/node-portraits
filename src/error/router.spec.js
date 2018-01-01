var app = require('../app');
var request = require("request");

var base_url = "http://localhost:3000"

describe("Error router", function () {

  var server;

  beforeEach(function (done) {
    // starts the server
    server = app.listen( { port: 3000 }, done);
  });

  afterEach(function () {
    server.close();
  });

  describe("GET /nirwana", function () {
    it("returns status code 404", function (done) {
      request.get(base_url + '/nirwana', function (error, response, body) {
        expect(response.statusCode).toBe(404);
        done();
      });
    });
  });

});