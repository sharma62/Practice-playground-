
const url  = require('url');

const newUrl = new URL('https://www.example.com:8000/path/name?query=string&name=suraj&another=value&another2=value2@123'); 
console.log("Full Url object: ",newUrl)
console.log("href: ",newUrl.href)
console.log("origin: ",newUrl.origin)
console.log("protocol: ",newUrl.protocol)
console.log("username: ",newUrl.username)
console.log("password: ",newUrl.password)
console.log("host: ",newUrl.host)
console.log("hostname: ",newUrl.hostname)
console.log("port: ",newUrl.port)
 console.log("Pathname: ",newUrl.pathname)
console.log("search: ",newUrl.search)
console.log("search parameter: ",newUrl.searchParams)
console.log("search parameter: ",newUrl.searchParams.get('name'))
console.log("hash: ",newUrl.hash)