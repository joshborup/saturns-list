UPDATE posts
SET notified = null
WHERE id = $1;
SELECT name, id FROM Posts
WHERE notified = 'approved' AND seller_id = $2;