### Schema

CREATE DATABASE users_db;
USE users_db;

DROP TABLE users

CREATE TABLE users
(
	id INT AUTO_INCREMENT NOT NULL,
	userName varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	PRIMARY KEY(id)
);

