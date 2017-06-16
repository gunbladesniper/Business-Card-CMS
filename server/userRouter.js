var express = require('express');

var userRouter = express.Router();
var pool = require('./database');

const SQL = require('sql-template-strings');

userRouter.get('/login', (req, res)=>{
	var getUserCards = SQL`SELECT users.id, users.username, cards.name, cards.title,cards.address1, cards.address2, cards.email, cards.phone, cards.web, cards.id, templates.id as templateId, templates.name as templatename, templates.image, templates.namestyle, templates.titlestyle, templates.address1style, templates.address2style, templates.emailstyle, templates.phonestyle, templates.webstyle FROM USERS  LEFT JOIN CARDS on cards.user_id = users.id LEFT JOIN templates on templates.id = cards.template_id WHERE users.id = (select users.id where users.username = ${req.query.username} and users.password=${req.query.password} limit 1);`
	pool.query(getUserCards,(err,resp)=>{
		if(err){
			return console.error('error running query', err);
		}
		res.send(resp.rows);
	})
})

userRouter.get('/nextId',(req,res)=>{
	pool.query('SELECT id from cards order by id DESC limit 1;',(err, resp)=>{
		if(err){
			return console.error('error running query', err);
		}
		res.send(resp.rows);
	})
})


userRouter.post('/saveCard',(req,res)=>{
	var user =  req.body.user;
	var card = req.body.card;
	pool.query(SQL`INSERT into cards VALUES(${card.id}, 1 , ${card.name}, ${card.title}, ${card.address1}, ${card.address2}, ${card.email}, ${card.phone}, ${card.web}, ${card.template.id}) ON CONFLICT (id) DO UPDATE SET name=${card.name}, title=${card.title}, address1=${card.address1}, address2=${card.address2},email=${card.email}, phone=${card.phone}, web=${card.web}, template_id=${card.template.id} WHERE cards.id = 1;`,(err,resp)=>{
		if(err){
			return console.error('error running query', err)
		}
		res.send(resp)
	})
})

userRouter.delete('/deleteCard', (req,res)=>{
	var id = Number(req.query.ID);
	pool.query(SQL`DELETE FROM cards * where id = ${id}`,(err,resp)=>{
		if(err){
			return console.error('error running query', err)
		}
		res.send('card deleted');
	});
})

module.exports = userRouter;