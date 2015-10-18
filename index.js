var express = require("express"),
    bodyParser = require("body-parser"),
    path = require('path');
var app = express();
app.use(bodyParser.json());
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("IP:",process.env.IP);
    console.log("port:",process.env.PORT);
});