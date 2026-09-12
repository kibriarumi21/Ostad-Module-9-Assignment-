const http = require("http");

const fs = require("fs");

const path = require("path");


// Port definition 5000

const PORT = 5000;

const server = http.createServer((req, res) => {
  // Set default Header for HTML response
  res.setHeader("Content-Type", "text/html");

  let filePath = "";
  

  // Route Handling 

  if (req.url === "/" || req.url === "/home") {
    filePath = path.join(__dirname, "Index.html");
  } else if (req.url === "/blog") {
    filePath = path.join(__dirname, "blog.html");
  } else if (req.url === "/contact") {
    filePath = path.join(__dirname, "contact.html");
  } else if (req.url === "/about") {
    filePath = path.join(__dirname, "about.html");
  } else {
    // Invalid Route - 404 Response
    res.statusCode = 404;
    return res.end("<h1>404 - Page Not Found</h1>");
  }

  // Read and serve the corresponding HTML file

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end("<h1>500 - Internal Server Error</h1>");
    } else {
      res.statusCode = 200;
      res.end(data);
    }
  });
});

// Server Listening on Port 5000

server.listen(5000, () => {
  console.log("Server is running on 5000");
});