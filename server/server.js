var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');


var fakeDB = require('./fakeData');
var pool = require('./database');

var userRouter = require('./userRouter');

pool.on('error',(err, client)=>{
	console.log('idle client error', err.message, err.stack);
})

app.use(express.static(path.join(__dirname, '../client/dist')))
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/user', userRouter);

app.get('/templates', (req, res)=>{
	pool.query('SELECT templates.name as templatename, * FROM templates ',(err, resp)=>{
		if(err){
			return console.error('error running query', err);
		}
		res.send(resp.rows)
	})
})

app.listen(3000, (req, res)=>{
	console.log('listening on port 3000');
})