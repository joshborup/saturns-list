DELETE FROM posts
WHERE id = $1 AND active=false;
SELECT * FROM posts
WHERE active = false AND seller_id = $2
ORDER BY time_posted DESC;