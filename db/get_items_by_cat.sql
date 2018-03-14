SELECT posts.*, username FROM 
posts JOIN users
ON (posts.seller_id = users.id)
WHERE catergory_id = $1
AND active = true AND approved = true
ORDER BY time_posted DESC
LIMIT 10;