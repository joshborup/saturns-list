UPDATE posts
SET active = false
WHERE id = $1 AND seller_id = $2;
SELECT * FROM posts
WHERE seller_id = $2 AND active = true;