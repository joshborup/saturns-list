INSERT INTO reviews(user_id, review, rating, reviewer_id) VAlUES($1, $2, $3, $4);
SELECT * FROM reviews
WHERE user_id = $1;