"use strict";
exports.__esModule = true;
var request = require("request");
request('http://api.komavideo.com/news/list', function (error, response, body) {
    if (error)
        console.log(error);
    else {
        // console.log(body);
        var body = JSON.parse(body);
        for (var i = 0; i < body.length; i++) {
            console.log(body[i].title);
        }
    }
});
