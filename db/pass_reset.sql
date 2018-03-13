UPDATE users
set pass_reset_string = $1
WHERE email = $2;
SELECT email FROM users
WHERE email = $2;