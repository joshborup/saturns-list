SELECT reviews.*, users.username FROM
reviews JOIN users
ON (reviewer_id = users.id)
WHERE user_id = $1;