const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('Express');
});

server.get('/about', (req, res) => {
    res.send('This is about me tryng to develop my skills in node');
});

server.listen(4242, () => {
    console.log('Server is running ...');
})