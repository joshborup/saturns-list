SELECT * FROM posts WHERE name ILIKE CONCAT( $1 , '%') AND active = true
ORDER BY time_posted DESC
LIMIT 10 OFFSET $2;