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
    , member_since TEXT NOT NULL
)

INSERT INTO user_account (first_name, last_name, username, password, email, phone, zip, city, state, country) VALUES ('josh', 'borup', 'joshborup', 'cool', 'joshborup@gmail.com', '4803209766', 85213, 'mesa', 'AZ', 'United States');
INSERT INTO user_account (first_name, last_name, username, password, email, phone, zip, city, state, country) VALUES ('annie', 'brown', 'annie01', 'cool', 'annalynnebrown91@gmail.com', '4805865641', 85213, 'mesa', 'AZ', 'United States');
INSERT INTO user_account (first_name, last_name, username, password, email, phone, zip, city, state, country) VALUES ('jeff', 'borup', 'iceman34', 'cool', 'jeffborup@gmail.com', '4806281079', 85004, 'phoenix', 'AZ', 'United States');
INSERT INTO user_account (first_name, last_name, username, password, email, phone, zip, city, state, country) VALUES ('jake', 'borup', 'sundevil67', 'cool', 'jakeborup@gmail.com', 'not listed', 85142, 'queen creek', 'AZ', 'United States');
INSERT INTO user_account (first_name, last_name, username, password, email, phone, zip, city, state, country) VALUES ('lora', 'borup', 'madre0ne', 'cool', 'lora.borup@asu.edu', '4808613512', 85213, 'mesa', 'AZ', 'United States');

DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS categories;

CREATE TABLE categories(
    id SERIAL PRIMARY KEY NOT NULL
    ,name TEXT NOT NULL
);

INSERT INTO categories (name) VALUES ('Barlow');
INSERT INTO categories (name) VALUES ('Binoculars');
INSERT INTO categories (name) VALUES ('Camera Lenses');
INSERT INTO categories (name) VALUES ('Cases');
INSERT INTO categories (name) VALUES ('CCD Cameras');
INSERT INTO categories (name) VALUES ('Diagonals');
INSERT INTO categories (name) VALUES ('Digital Cameras');
INSERT INTO categories (name) VALUES ('Eyepieces');
INSERT INTO categories (name) VALUES ('Filters');
INSERT INTO categories (name) VALUES ('Finders');
INSERT INTO categories (name) VALUES ('Focusers');
INSERT INTO categories (name) VALUES ('Mounts Alt-Az');
INSERT INTO categories (name) VALUES ('Mounts Equitorial');
INSERT INTO categories (name) VALUES ('Observatories');
INSERT INTO categories (name) VALUES ('Solar Filters');
INSERT INTO categories (name) VALUES ('Spotting Scopes');
INSERT INTO categories (name) VALUES ('Telescope - Astrograph');
INSERT INTO categories (name) VALUES ('Telescope - Catadioptric');
INSERT INTO categories (name) VALUES ('Telescope - Dall Kirkham');
INSERT INTO categories (name) VALUES ('Telescope - Reflector');
INSERT INTO categories (name) VALUES ('Telescope - Refractor');
INSERT INTO categories (name) VALUES ('Telescope - Ritchey-Chreiten');
INSERT INTO categories (name) VALUES ('Tripods');
INSERT INTO categories (name) VALUES ('Misc');

DROP TABLE IF EXISTS posts;

CREATE TABLE posts(
    id SERIAL PRIMARY KEY
    ,seller_id INTEGER NOT NULL REFERENCES users(id)
    ,catergory_id INTEGER NOT NULL
    ,time_posted TEXT NOT NULL
    ,name TEXT NOT NULL
    ,description TEXT NOT NULL
    ,image_path TEXT
    ,price INTEGER NOT NULL
    ,condition TEXT NOT NULL
    ,active BOOLEAN NOT NULL
);

