DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id SERIAL PRIMARY KEY
    , first_name VARCHAR(64) NOT NULL
    , last_name VARCHAR(64) NOT NULL
    , username VARCHAR(64) NOT NULL
    , password TEXT NOT NULL
    , email TEXT NOT NULL
    , phone TEXT
    , zip INTEGER
    , city VARCHAR(72) NOT NULL
    , state VARCHAR(72) 
    , country VARCHAR(72) NOT NULL
)

INSERT INTO user_account (first_name, last_name, username, password, email, phone, zip, city, state, country) VALUES ('josh', 'borup', 'joshborup', 'cool', 'joshborup@gmail.com', '4803209766', 85213, 'mesa', 'AZ', 'United States');
INSERT INTO user_account (first_name, last_name, username, password, email, phone, zip, city, state, country) VALUES ('annie', 'brown', 'annie01', 'cool', 'annalynnebrown91@gmail.com', '4805865641', 85213, 'mesa', 'AZ', 'United States');
INSERT INTO user_account (first_name, last_name, username, password, email, phone, zip, city, state, country) VALUES ('jeff', 'borup', 'iceman34', 'cool', 'jeffborup@gmail.com', '4806281079', 85004, 'phoenix', 'AZ', 'United States');
INSERT INTO user_account (first_name, last_name, username, password, email, phone, zip, city, state, country) VALUES ('jake', 'borup', 'sundevil67', 'cool', 'jakeborup@gmail.com', 'not listed', 85142, 'queen creek', 'AZ', 'United States');
INSERT INTO user_account (first_name, last_name, username, password, email, phone, zip, city, state, country) VALUES ('lora', 'borup', 'madre0ne', 'cool', 'lora.borup@asu.edu', '4808613512', 85213, 'mesa', 'AZ', 'United States');



CREATE TABLE posts(
    id SERIAL PRIMARY KEY
    ,seller_id INTEGER REFERENCES user_account(id)
    ,catergory_id INTEGER REFERENCES catergory(id)
    ,time_posted INTEGER NOT NULL
    ,name TEXT NOT NULL
    ,description TEXT NOT NULL
    ,image_path TEXT
    ,price INTEGER NOT NULL
)