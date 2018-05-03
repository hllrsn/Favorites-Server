var http = require("http");
var fs = require("fs");


var PORT = 8080;


var server = http.createServer(handleRequest);


function handleRequest(req, res) {

  var path = req.url;

  switch (path) {

  case "/Movies":
    return fs.readFile(__dirname + "/favemovies.html", function(err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });

  case "/Foods":
    return fs.readFile(__dirname + "/favefoods.html", function(err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });

  case "/Frameworks":
    return fs.readFile(__dirname + "/faveframeworks.html", function(err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });

  default:
    return fs.readFile(__dirname + "/faveshome.html", function(err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
}


server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
