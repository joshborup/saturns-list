INSERT INTO users
(first_name, last_name, username, password, email, phone, zip, city, state, country, member_since) 
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);
SELECT id, first_name, last_name, username, email, phone, zip, city, state, country, member_since
FROM users
WHERE email = $5 LIMIT 1;