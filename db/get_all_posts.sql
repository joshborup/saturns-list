SELECT posts.*, username FROM 
posts JOIN users
ON (posts.seller_id = users.id)
WHERE active = true AND approved = true
ORDER BY time_posted DESC
LIMIT 10;