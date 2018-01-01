var app = require('../app');
var request = require("request");

var base_url = "http://localhost:3000"

describe("Home router", function () {

  var server;

  beforeEach(function (done) {
    // starts the server
    server = app.listen( { port: 3000 }, done);
  });

  afterEach(function () {
    server.close();
  });

  describe("GET /", function () {
    it("route returns status code 200", function (done) {
      request.get(base_url, function (error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });

  describe("GET /contact", function () {
    it("contacts returns status code 200", function (done) {
      request.get(base_url + '/contact', function (error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });

  describe("GET /imprint", function () {
    it("imprint returns status code 200", function (done) {
      request.get(base_url + '/imprint', function (error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });

});