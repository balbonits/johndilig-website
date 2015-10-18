var fs = require("fs"),
    path = require('path');
    
var express = require("express"),
    bodyParser = require("body-parser");
    
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

//set root
app.get("/",function(req,res){
        if(req.url == "/"){
            fs.readFile("./public/index.html", function(error, data){
                res.writeHead(200, {"Content-type":"text/html"});
                res.end(data);
            });
        } else {
            fs.readFile("./public" + req.url, function(error, data){
                if (error) {
                    res.writeHead(404, {"Content-type":"text/plain"});
                    res.end("Sorry the page was not found: ");
                } else {
                    res.writeHead(200, {"Content-type":"text/html"});
                    res.end(data);
                }
            });
            
        }
}).listen(process.env.PORT, process.env.IP);