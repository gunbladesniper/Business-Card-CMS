var express = require('express');
var path = require('path');

var app = express();


app.use(express.static(path.join(__dirname, '../client/dist')))
app.use(express.static(path.join(__dirname, '../client/public')));


// app.get('/', (req, res)=>{
// 	res.sendFile(path.join(__dirname, ))
// })

app.listen(3000, (req, res)=>{
	console.log('listening on port 3000');
})