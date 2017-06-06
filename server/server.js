var express = require('express');
var path = require('path');

var app = express();

var fakeDB = require('./fakeData');




app.use(express.static(path.join(__dirname, '../client/dist')))
app.use(express.static(path.join(__dirname, '../client/public')));


app.get('/templates', (req, res)=>{
	res.send(fakeDB.templates)
})

app.listen(3000, (req, res)=>{
	console.log('listening on port 3000');
})