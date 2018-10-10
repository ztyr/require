var fs = require('fs');
var path = require('path');
var url = require('url');

function require() {
    var arr = [];

    var pathname = url.parse(req.url, true).pathname;
    fs.readFileSync(path.join(__dirname, 'libs', pathname));
}

function define() {

}