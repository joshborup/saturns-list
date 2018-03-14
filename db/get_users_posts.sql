SELECT * FROM posts
WHERE seller_id = $1 AND active = true AND approved = true;