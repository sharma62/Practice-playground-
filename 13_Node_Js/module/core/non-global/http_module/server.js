const http = require("http");
const PORT = 5050;

const server = http.createServer((req, res) => {
  let page = "";
  let url = req.url;
  console.log(url);
  if (url === "/") {
    page = `<h1>Welcome to the Home Page</h1>`;
  } else if (url === "/about") {
    page = `<h1>Welcome to the About Page</h1>`;
  } else if (url === "/contact") {
    page = `<h1>Welcome to the contact Page</h1>`;
  } else {
    page = `<h1>404 Page Not Found</h1>`;
  }
  res.write(page);
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is reunning on  port ${PORT}`);
});
