SELECT * FROM posts
WHERE active = false AND seller_id = $1 AND approved = true
ORDER BY time_posted DESC
LIMIT 10;