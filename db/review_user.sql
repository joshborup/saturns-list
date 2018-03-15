INSERT INTO reviews(user_id, review, rating, reviewer_id, notified) VAlUES($1, $2, $3, $4, 'new');
SELECT reviews.*, users.username FROM 
reviews JOIN users
ON (reviewer_id = users.id)
WHERE user_id = $1;