var pg= require('pg');

var config = {
	user: 'savaughnjones',
	database: 'templates',
	// password: ,
	host:'localhost',
	port:'5432',
	max:10,
	idleTimeoutMillis: 30000
}

var pool = new pg.Pool(config);

module.exports= pool;