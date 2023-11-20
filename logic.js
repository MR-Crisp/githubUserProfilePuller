function forminput() {
  let x = document.forms["profileFinder"]["userUrl"].value;
  console.log(x);
}

function seachForUser(user) {
  console.log(user);
}

var http = require("http");
var fs = require("fs");

const PORT = 8080;

fs.readFile("./index.html", function (err, html) {
  if (err) throw err;

  http
    .createServer(function (request, response) {
      response.writeHeader(200, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    })
    .listen(PORT);
});

seachForUser("https://www.google.com");
