SELECT reviews.id, users.username FROM reviews
JOIN users
ON (reviewer_id = users.id)
WHERE notified = 'new' AND user_id = $1;