UPDATE users
SET verified = true
WHERE verified_link = $1;
SELECT * FROM users;