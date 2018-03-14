SELECT * FROM posts
WHERE active = true AND approved = true
ORDER BY time_posted DESC
LIMIT 10 OFFSET $1;