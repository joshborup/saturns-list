SELECT country, city, email, first_name, last_name, username, member_since, state, website, user_id FROM
users JOIN profiles
ON (users.id = user_id)
WHERE users.id = $1;
