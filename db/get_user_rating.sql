SELECT reviews.*, users.username, reviewer_id FROM
reviews JOIN users
ON (reviewer_id = users.id)
WHERE user_id = $1;