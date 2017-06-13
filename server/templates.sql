DROP TABLE templates;

CREATE TABLE templates ( template text);

CREATE TABLE users ( id SERIAL PRIMARY KEY , username varchar(20), password varchar(20) );

CREATE TABLE cards ( id SERIAL PRIMARY KEY ,user_id int references users(id) , name varchar(20), title varchar(50), address1 varchar(30), address2 varchar(30), email varchar(30), phone varchar(20), web varchar(30), template_id int references templates(id));

CREATE TABLE templates (id SERIAL PRIMARY KEY, name varchar(30), image varchar(50), namestyle varchar(30), titlestyle varchar(30), address1style varchar(30), address2style varchar(30), emailstyle varchar(30), phonestyle varchar(30), webstyle varchar(30) );

SELECT users.id, users.username, cards.name, cards.title,cards.address1, cards.address2, cards.id, cards.email, cards.phone, cards.web , templates.id, templates.name as templatename, templates.image, templates.namestyle, templates.titlestyle, templates.address1style, templates.address2style, templates.emailstyle, templates.phonestyle, templates.webstyle FROM USERS  LEFT JOIN CARDS on cards.used_id =users.id
	LEFT JOIN templates on templates.id = cards.template_id WHERE users.id = 1;
SELECT templates.name as templatename, * FROM templates

INSERT into templates VALUES
(1, 'app-card-1', 'images/cardbackground1.png', 'name-position', 'title-position', 'address1-position', 'address2-position', 'email-position', 'phone-position', 'web-positon' ),
(2, 'app-card-2', 'images/cardbackground2.png', 'name-position', 'title-position', 'address1-position', 'address2-position', 'email-position', 'phone-position', 'web-position' ),
(3, 'app-card-3', 'images/cardbackground3.png', 'name-position', 'title-position', 'address1-position', 'address2-position', 'email-position', 'phone-position', 'web-position' );

INSERT into CARDS VALUES
(1, 1, 'Robert Dobbs', 'Subgenious', '123 4th st', 'Apt z', 'bobbydobby@a.b', '555-555-5555', 'cotsg.c', 1),
(2, 1, 'JAMES FOX', 'Subgenious', '123 4th st', 'Apt A', 'bobbydobby@j.b', '555-555-5555', 'cotsg.c', 2);

UPDATE templates SET name = 'Savaughn' WHERE id = 1;