var pg= require('pg');
var config= require('./config');

var pool = new pg.Pool(config);

module.exports= pool;