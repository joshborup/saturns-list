DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS profiles;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS country;
DROP TABLE IF EXISTS categories;

CREATE TABLE country (
id SERIAL NOT NULL
, country_id INTEGER NOT NULL PRIMARY KEY
, country_name TEXT NOT NULL
);

CREATE TABLE users(
    id SERIAL PRIMARY KEY
    , first_name VARCHAR(64) NOT NULL
    , last_name VARCHAR(64) NOT NULL
    , username VARCHAR(64) UNIQUE NOT NULL 
    , password TEXT NOT NULL
    , email TEXT UNIQUE NOT NULL
    , phone TEXT
    , zip INTEGER
    , city VARCHAR(72) NOT NULL
    , state VARCHAR(72) 
    , country INTEGER NOT NULL REFERENCES country(country_id)
    , member_since TEXT NOT NULL
);

CREATE TABLE reviews(
id SERIAL NOT NULL PRIMARY KEY
, user_id INTEGER REFERENCES users(id)
, review TEXT
, rating INTEGER NOT NULL
, reviewer_id INTEGER REFERENCES users(id)
);

CREATE TABLE profiles(
    id SERIAL PRIMARY KEY
    , user_id INTEGER REFERENCES users(id)
    , description TEXT
    , website TEXT
    , profile_image TEXT
);

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

INSERT INTO country (country_id, country_name) VALUES (840,'United States');
INSERT INTO country (country_id, country_name) VALUES (4,'Afghanistan');
INSERT INTO country (country_id, country_name) VALUES (248,'Åland Islands');
INSERT INTO country (country_id, country_name) VALUES (8,'Albania');
INSERT INTO country (country_id, country_name) VALUES (12,'Algeria');
INSERT INTO country (country_id, country_name) VALUES (16,'American Samoa');
INSERT INTO country (country_id, country_name) VALUES (20,'Andorra');
INSERT INTO country (country_id, country_name) VALUES (24,'Angola');
INSERT INTO country (country_id, country_name) VALUES (660,'Anguilla');
INSERT INTO country (country_id, country_name) VALUES (10,'Antarctica');
INSERT INTO country (country_id, country_name) VALUES (28,'Antigua and Barbuda');
INSERT INTO country (country_id, country_name) VALUES (32,'Argentina');
INSERT INTO country (country_id, country_name) VALUES (51,'Armenia');
INSERT INTO country (country_id, country_name) VALUES (533,'Aruba');
INSERT INTO country (country_id, country_name) VALUES (36,'Australia');
INSERT INTO country (country_id, country_name) VALUES (40,'Austria');
INSERT INTO country (country_id, country_name) VALUES (31,'Azerbaijan');
INSERT INTO country (country_id, country_name) VALUES (44,'Bahamas');
INSERT INTO country (country_id, country_name) VALUES (48,'Bahrain');
INSERT INTO country (country_id, country_name) VALUES (50,'Bangladesh');
INSERT INTO country (country_id, country_name) VALUES (52,'Barbados');
INSERT INTO country (country_id, country_name) VALUES (112,'Belarus');
INSERT INTO country (country_id, country_name) VALUES (56,'Belgium');
INSERT INTO country (country_id, country_name) VALUES (84,'Belize');
INSERT INTO country (country_id, country_name) VALUES (204,'Benin');
INSERT INTO country (country_id, country_name) VALUES (60,'Bermuda');
INSERT INTO country (country_id, country_name) VALUES (64,'Bhutan');
INSERT INTO country (country_id, country_name) VALUES (68,'Bolivia, Plurinational State of');
INSERT INTO country (country_id, country_name) VALUES (535,'Bonaire, Sint Eustatius and Saba');
INSERT INTO country (country_id, country_name) VALUES (70,'Bosnia and Herzegovina');
INSERT INTO country (country_id, country_name) VALUES (72,'Botswana');
INSERT INTO country (country_id, country_name) VALUES (74,'Bouvet Island');
INSERT INTO country (country_id, country_name) VALUES (76,'Brazil');
INSERT INTO country (country_id, country_name) VALUES (86,'British Indian Ocean Territory');
INSERT INTO country (country_id, country_name) VALUES (96,'Brunei Darussalam');
INSERT INTO country (country_id, country_name) VALUES (100,'Bulgaria');
INSERT INTO country (country_id, country_name) VALUES (854,'Burkina Faso');
INSERT INTO country (country_id, country_name) VALUES (108,'Burundi');
INSERT INTO country (country_id, country_name) VALUES (116,'Cambodia');
INSERT INTO country (country_id, country_name) VALUES (120,'Cameroon');
INSERT INTO country (country_id, country_name) VALUES (124,'Canada');
INSERT INTO country (country_id, country_name) VALUES (132,'Cape Verde');
INSERT INTO country (country_id, country_name) VALUES (136,'Cayman Islands');
INSERT INTO country (country_id, country_name) VALUES (140,'Central African Republic');
INSERT INTO country (country_id, country_name) VALUES (148,'Chad');
INSERT INTO country (country_id, country_name) VALUES (152,'Chile');
INSERT INTO country (country_id, country_name) VALUES (156,'China');
INSERT INTO country (country_id, country_name) VALUES (162,'Christmas Island');
INSERT INTO country (country_id, country_name) VALUES (166,'Cocos (Keeling) Islands');
INSERT INTO country (country_id, country_name) VALUES (170,'Colombia');
INSERT INTO country (country_id, country_name) VALUES (174,'Comoros');
INSERT INTO country (country_id, country_name) VALUES (178,'Congo');
INSERT INTO country (country_id, country_name) VALUES (180,'Congo, the Democratic Republic of the');
INSERT INTO country (country_id, country_name) VALUES (184,'Cook Islands');
INSERT INTO country (country_id, country_name) VALUES (188,'Costa Rica');
INSERT INTO country (country_id, country_name) VALUES (384,'Côte dIvoire');
INSERT INTO country (country_id, country_name) VALUES (191,'Croatia');
INSERT INTO country (country_id, country_name) VALUES (192,'Cuba');
INSERT INTO country (country_id, country_name) VALUES (531,'Curaçao');
INSERT INTO country (country_id, country_name) VALUES (196,'Cyprus');
INSERT INTO country (country_id, country_name) VALUES (203,'Czech Republic');
INSERT INTO country (country_id, country_name) VALUES (208,'Denmark');
INSERT INTO country (country_id, country_name) VALUES (262,'Djibouti');
INSERT INTO country (country_id, country_name) VALUES (212,'Dominica');
INSERT INTO country (country_id, country_name) VALUES (214,'Dominican Republic');
INSERT INTO country (country_id, country_name) VALUES (218,'Ecuador');
INSERT INTO country (country_id, country_name) VALUES (818,'Egypt');
INSERT INTO country (country_id, country_name) VALUES (222,'El Salvador');
INSERT INTO country (country_id, country_name) VALUES (226,'Equatorial Guinea');
INSERT INTO country (country_id, country_name) VALUES (232,'Eritrea');
INSERT INTO country (country_id, country_name) VALUES (233,'Estonia');
INSERT INTO country (country_id, country_name) VALUES (231,'Ethiopia');
INSERT INTO country (country_id, country_name) VALUES (238,'Falkland Islands (Malvinas)');
INSERT INTO country (country_id, country_name) VALUES (234,'Faroe Islands');
INSERT INTO country (country_id, country_name) VALUES (242,'Fiji');
INSERT INTO country (country_id, country_name) VALUES (246,'Finland');
INSERT INTO country (country_id, country_name) VALUES (250,'France');
INSERT INTO country (country_id, country_name) VALUES (254,'French Guiana');
INSERT INTO country (country_id, country_name) VALUES (258,'French Polynesia');
INSERT INTO country (country_id, country_name) VALUES (260,'French Southern Territories');
INSERT INTO country (country_id, country_name) VALUES (266,'Gabon');
INSERT INTO country (country_id, country_name) VALUES (270,'Gambia');
INSERT INTO country (country_id, country_name) VALUES (268,'Georgia');
INSERT INTO country (country_id, country_name) VALUES (276,'Germany');
INSERT INTO country (country_id, country_name) VALUES (288,'Ghana');
INSERT INTO country (country_id, country_name) VALUES (292,'Gibraltar');
INSERT INTO country (country_id, country_name) VALUES (300,'Greece');
INSERT INTO country (country_id, country_name) VALUES (304,'Greenland');
INSERT INTO country (country_id, country_name) VALUES (308,'Grenada');
INSERT INTO country (country_id, country_name) VALUES (312,'Guadeloupe');
INSERT INTO country (country_id, country_name) VALUES (316,'Guam');
INSERT INTO country (country_id, country_name) VALUES (320,'Guatemala');
INSERT INTO country (country_id, country_name) VALUES (831,'Guernsey');
INSERT INTO country (country_id, country_name) VALUES (324,'Guinea');
INSERT INTO country (country_id, country_name) VALUES (624,'Guinea-Bissau');
INSERT INTO country (country_id, country_name) VALUES (328,'Guyana');
INSERT INTO country (country_id, country_name) VALUES (332,'Haiti');
INSERT INTO country (country_id, country_name) VALUES (334,'Heard Island and McDonald Islands');
INSERT INTO country (country_id, country_name) VALUES (336,'Holy See (Vatican City State)');
INSERT INTO country (country_id, country_name) VALUES (340,'Honduras');
INSERT INTO country (country_id, country_name) VALUES (344,'Hong Kong');
INSERT INTO country (country_id, country_name) VALUES (348,'Hungary');
INSERT INTO country (country_id, country_name) VALUES (352,'Iceland');
INSERT INTO country (country_id, country_name) VALUES (356,'India');
INSERT INTO country (country_id, country_name) VALUES (360,'Indonesia');
INSERT INTO country (country_id, country_name) VALUES (364,'Iran, Islamic Republic of');
INSERT INTO country (country_id, country_name) VALUES (368,'Iraq');
INSERT INTO country (country_id, country_name) VALUES (372,'Ireland');
INSERT INTO country (country_id, country_name) VALUES (833,'Isle of Man');
INSERT INTO country (country_id, country_name) VALUES (376,'Israel');
INSERT INTO country (country_id, country_name) VALUES (380,'Italy');
INSERT INTO country (country_id, country_name) VALUES (388,'Jamaica');
INSERT INTO country (country_id, country_name) VALUES (392,'Japan');
INSERT INTO country (country_id, country_name) VALUES (832,'Jersey');
INSERT INTO country (country_id, country_name) VALUES (400,'Jordan');
INSERT INTO country (country_id, country_name) VALUES (398,'Kazakhstan');
INSERT INTO country (country_id, country_name) VALUES (404,'Kenya');
INSERT INTO country (country_id, country_name) VALUES (296,'Kiribati');
INSERT INTO country (country_id, country_name) VALUES (408,'Korea, Democratic Peoples Republic of');
INSERT INTO country (country_id, country_name) VALUES (410,'Korea, Republic of');
INSERT INTO country (country_id, country_name) VALUES (414,'Kuwait');
INSERT INTO country (country_id, country_name) VALUES (417,'Kyrgyzstan');
INSERT INTO country (country_id, country_name) VALUES (418,'Lao Peoples Democratic Republic');
INSERT INTO country (country_id, country_name) VALUES (428,'Latvia');
INSERT INTO country (country_id, country_name) VALUES (422,'Lebanon');
INSERT INTO country (country_id, country_name) VALUES (426,'Lesotho');
INSERT INTO country (country_id, country_name) VALUES (430,'Liberia');
INSERT INTO country (country_id, country_name) VALUES (434,'Libya');
INSERT INTO country (country_id, country_name) VALUES (438,'Liechtenstein');
INSERT INTO country (country_id, country_name) VALUES (440,'Lithuania');
INSERT INTO country (country_id, country_name) VALUES (442,'Luxembourg');
INSERT INTO country (country_id, country_name) VALUES (446,'Macao');
INSERT INTO country (country_id, country_name) VALUES (807,'Macedonia, the former Yugoslav Republic of');
INSERT INTO country (country_id, country_name) VALUES (450,'Madagascar');
INSERT INTO country (country_id, country_name) VALUES (454,'Malawi');
INSERT INTO country (country_id, country_name) VALUES (458,'Malaysia');
INSERT INTO country (country_id, country_name) VALUES (462,'Maldives');
INSERT INTO country (country_id, country_name) VALUES (466,'Mali');
INSERT INTO country (country_id, country_name) VALUES (470,'Malta');
INSERT INTO country (country_id, country_name) VALUES (584,'Marshall Islands');
INSERT INTO country (country_id, country_name) VALUES (474,'Martinique');
INSERT INTO country (country_id, country_name) VALUES (478,'Mauritania');
INSERT INTO country (country_id, country_name) VALUES (480,'Mauritius');
INSERT INTO country (country_id, country_name) VALUES (175,'Mayotte');
INSERT INTO country (country_id, country_name) VALUES (484,'Mexico');
INSERT INTO country (country_id, country_name) VALUES (583,'Micronesia, Federated States of');
INSERT INTO country (country_id, country_name) VALUES (498,'Moldova, Republic of');
INSERT INTO country (country_id, country_name) VALUES (492,'Monaco');
INSERT INTO country (country_id, country_name) VALUES (496,'Mongolia');
INSERT INTO country (country_id, country_name) VALUES (499,'Montenegro');
INSERT INTO country (country_id, country_name) VALUES (500,'Montserrat');
INSERT INTO country (country_id, country_name) VALUES (504,'Morocco');
INSERT INTO country (country_id, country_name) VALUES (508,'Mozambique');
INSERT INTO country (country_id, country_name) VALUES (104,'Myanmar');
INSERT INTO country (country_id, country_name) VALUES (516,'Namibia');
INSERT INTO country (country_id, country_name) VALUES (520,'Nauru');
INSERT INTO country (country_id, country_name) VALUES (524,'Nepal');
INSERT INTO country (country_id, country_name) VALUES (528,'Netherlands');
INSERT INTO country (country_id, country_name) VALUES (540,'New Caledonia');
INSERT INTO country (country_id, country_name) VALUES (554,'New Zealand');
INSERT INTO country (country_id, country_name) VALUES (558,'Nicaragua');
INSERT INTO country (country_id, country_name) VALUES (562,'Niger');
INSERT INTO country (country_id, country_name) VALUES (566,'Nigeria');
INSERT INTO country (country_id, country_name) VALUES (570,'Niue');
INSERT INTO country (country_id, country_name) VALUES (574,'Norfolk Island');
INSERT INTO country (country_id, country_name) VALUES (580,'Northern Mariana Islands');
INSERT INTO country (country_id, country_name) VALUES (578,'Norway');
INSERT INTO country (country_id, country_name) VALUES (512,'Oman');
INSERT INTO country (country_id, country_name) VALUES (586,'Pakistan');
INSERT INTO country (country_id, country_name) VALUES (585,'Palau');
INSERT INTO country (country_id, country_name) VALUES (275,'Palestinian Territory, Occupied');
INSERT INTO country (country_id, country_name) VALUES (591,'Panama');
INSERT INTO country (country_id, country_name) VALUES (598,'Papua New Guinea');
INSERT INTO country (country_id, country_name) VALUES (600,'Paraguay');
INSERT INTO country (country_id, country_name) VALUES (604,'Peru');
INSERT INTO country (country_id, country_name) VALUES (608,'Philippines');
INSERT INTO country (country_id, country_name) VALUES (612,'Pitcairn');
INSERT INTO country (country_id, country_name) VALUES (616,'Poland');
INSERT INTO country (country_id, country_name) VALUES (620,'Portugal');
INSERT INTO country (country_id, country_name) VALUES (630,'Puerto Rico');
INSERT INTO country (country_id, country_name) VALUES (634,'Qatar');
INSERT INTO country (country_id, country_name) VALUES (638,'Réunion');
INSERT INTO country (country_id, country_name) VALUES (642,'Romania');
INSERT INTO country (country_id, country_name) VALUES (643,'Russian Federation');
INSERT INTO country (country_id, country_name) VALUES (646,'Rwanda');
INSERT INTO country (country_id, country_name) VALUES (652,'Saint Barthélemy');
INSERT INTO country (country_id, country_name) VALUES (654,'Saint Helena, Ascension and Tristan da Cunha');
INSERT INTO country (country_id, country_name) VALUES (659,'Saint Kitts and Nevis');
INSERT INTO country (country_id, country_name) VALUES (662,'Saint Lucia');
INSERT INTO country (country_id, country_name) VALUES (663,'Saint Martin (French part)');
INSERT INTO country (country_id, country_name) VALUES (666,'Saint Pierre and Miquelon');
INSERT INTO country (country_id, country_name) VALUES (670,'Saint Vincent and the Grenadines');
INSERT INTO country (country_id, country_name) VALUES (882,'Samoa');
INSERT INTO country (country_id, country_name) VALUES (674,'San Marino');
INSERT INTO country (country_id, country_name) VALUES (678,'Sao Tome and Principe');
INSERT INTO country (country_id, country_name) VALUES (682,'Saudi Arabia');
INSERT INTO country (country_id, country_name) VALUES (686,'Senegal');
INSERT INTO country (country_id, country_name) VALUES (688,'Serbia');
INSERT INTO country (country_id, country_name) VALUES (690,'Seychelles');
INSERT INTO country (country_id, country_name) VALUES (694,'Sierra Leone');
INSERT INTO country (country_id, country_name) VALUES (702,'Singapore');
INSERT INTO country (country_id, country_name) VALUES (534,'Sint Maarten (Dutch part)');
INSERT INTO country (country_id, country_name) VALUES (703,'Slovakia');
INSERT INTO country (country_id, country_name) VALUES (705,'Slovenia');
INSERT INTO country (country_id, country_name) VALUES (90,'Solomon Islands');
INSERT INTO country (country_id, country_name) VALUES (706,'Somalia');
INSERT INTO country (country_id, country_name) VALUES (710,'South Africa');
INSERT INTO country (country_id, country_name) VALUES (239,'South Georgia and the South Sandwich Islands');
INSERT INTO country (country_id, country_name) VALUES (728,'South Sudan');
INSERT INTO country (country_id, country_name) VALUES (724,'Spain');
INSERT INTO country (country_id, country_name) VALUES (144,'Sri Lanka');
INSERT INTO country (country_id, country_name) VALUES (729,'Sudan');
INSERT INTO country (country_id, country_name) VALUES (740,'Suriname');
INSERT INTO country (country_id, country_name) VALUES (744,'Svalbard and Jan Mayen');
INSERT INTO country (country_id, country_name) VALUES (748,'Swaziland');
INSERT INTO country (country_id, country_name) VALUES (752,'Sweden');
INSERT INTO country (country_id, country_name) VALUES (756,'Switzerland');
INSERT INTO country (country_id, country_name) VALUES (760,'Syrian Arab Republic');
INSERT INTO country (country_id, country_name) VALUES (158,'Taiwan, Province of China');
INSERT INTO country (country_id, country_name) VALUES (762,'Tajikistan');
INSERT INTO country (country_id, country_name) VALUES (834,'Tanzania, United Republic of');
INSERT INTO country (country_id, country_name) VALUES (764,'Thailand');
INSERT INTO country (country_id, country_name) VALUES (626,'Timor-Leste');
INSERT INTO country (country_id, country_name) VALUES (768,'Togo');
INSERT INTO country (country_id, country_name) VALUES (772,'Tokelau');
INSERT INTO country (country_id, country_name) VALUES (776,'Tonga');
INSERT INTO country (country_id, country_name) VALUES (780,'Trinidad and Tobago');
INSERT INTO country (country_id, country_name) VALUES (788,'Tunisia');
INSERT INTO country (country_id, country_name) VALUES (792,'Turkey');
INSERT INTO country (country_id, country_name) VALUES (795,'Turkmenistan');
INSERT INTO country (country_id, country_name) VALUES (796,'Turks and Caicos Islands');
INSERT INTO country (country_id, country_name) VALUES (798,'Tuvalu');
INSERT INTO country (country_id, country_name) VALUES (800,'Uganda');
INSERT INTO country (country_id, country_name) VALUES (804,'Ukraine');
INSERT INTO country (country_id, country_name) VALUES (784,'United Arab Emirates');
INSERT INTO country (country_id, country_name) VALUES (826,'United Kingdom');
INSERT INTO country (country_id, country_name) VALUES (581,'United States Minor Outlying Islands');
INSERT INTO country (country_id, country_name) VALUES (858,'Uruguay');
INSERT INTO country (country_id, country_name) VALUES (860,'Uzbekistan');
INSERT INTO country (country_id, country_name) VALUES (548,'Vanuatu');
INSERT INTO country (country_id, country_name) VALUES (862,'Venezuela, Bolivarian Republic of');
INSERT INTO country (country_id, country_name) VALUES (704,'Viet Nam');
INSERT INTO country (country_id, country_name) VALUES (92,'Virgin Islands, British');
INSERT INTO country (country_id, country_name) VALUES (850,'Virgin Islands, U.S.');
INSERT INTO country (country_id, country_name) VALUES (876,'Wallis and Futuna');
INSERT INTO country (country_id, country_name) VALUES (732,'Western Sahara');
INSERT INTO country (country_id, country_name) VALUES (887,'Yemen');
INSERT INTO country (country_id, country_name) VALUES (894,'Zambia');
INSERT INTO country (country_id, country_name) VALUES (716,'Zimbabwe');