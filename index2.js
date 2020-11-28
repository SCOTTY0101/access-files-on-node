
const http = require('http');
const fs = require('fs');
const port = 3000;
//const express = require('express');
//index2.use(express.static(__dirname + 'public'));

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'test-html'})
    fs.readFile('index.html', function(error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Error : File Not Found');
        } else {
            res.write(data);
        }
        res.end();
    });
});

server.listen(port, function(error) {
    if (error) {
        console.log('Something want wrong', error);
    } else {
        console.log('Server is listening on port' + port);
    };;
});