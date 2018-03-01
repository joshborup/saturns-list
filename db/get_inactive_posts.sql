SELECT * FROM posts
WHERE active = false AND seller_id = $1
ORDER BY time_posted DESC
LIMIT 10;