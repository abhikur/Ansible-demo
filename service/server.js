var express = require('express');
var app = express();
var path = require('path');
app.listen(3333, function () {
    console.log('listening at 3333')
});

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/html/index.html'));
});