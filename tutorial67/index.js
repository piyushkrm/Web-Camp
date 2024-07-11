const http = require('http');
const fs = require('fs');
const { url } = require('inspector');

const hostname = '127.0.0.1';
const port = 3000;

const home = fs.readFileSync('./index.html')
const about = fs.readFileSync('./about.html')
const services = fs.readFileSync('./services.html')
const contact = fs.readFileSync('./contact.html')

const server = http.createServer((req, res) => {
    console.log(req.url)
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    if (url == '/') {
        res.end(home);
    }

    else if (url == '/about') {
        res.end(about);
    }

    else if (url == '/services') {
        res.end(services);
    }

    else if (url == '/contact') {
        res.end(contact);
    }

    else {
        statusCode = 404;
        res.end("404 not found");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});