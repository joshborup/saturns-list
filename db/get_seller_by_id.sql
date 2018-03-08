SELECT country, email, first_name, last_name, username, member_since, state, website FROM
users JOIN profiles
ON (users.id = user_id)
WHERE users.id = $1;
