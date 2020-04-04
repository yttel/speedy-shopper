### Schema

CREATE DATABASE groceriesdb;

USE groceriesdb;

CREATE TABLE categories
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE items
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	cat_id int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (cat_id) REFERENCES categories(id)
);

CREATE TABLE user
(
    id int NOT NULL AUTO_INCREMENT,
    user_name varchar(45),
    PRIMARY KEY (id)
);

CREATE TABLE list
(
    id int NOT NULL AUTO_INCREMENT,
    quantity int NOT NULL,
    obtained tinyint NOT NULL,
    next_time tinyint NOT NULL,
    item_id int NOT NULL,
    user_id int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (item_id) REFERENCES items(id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);
