SELECT country, email, first_name, last_name, username, member_since, state FROM users
WHERE id = $1;
