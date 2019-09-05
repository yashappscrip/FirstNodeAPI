const express = require('express');
var MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const db = require("./config/db");
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.send('Hello');
});
MongoClient.connect(db.url2,{ useNewUrlParser: true },(err,database)=>{
 if(err) return console.log(err);
 require('./app/routes')(app,database);
 app.listen(4000,(req,res)=>{
     console.log("Server Connected!");
 });
});