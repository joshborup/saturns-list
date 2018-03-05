UPDATE posts
SET active = true
WHERE id = $1 AND seller_id = $2;
SELECT * FROM posts
WHERE seller_id = $2 AND active = true;