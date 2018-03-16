SELECT email, posts.*, users.username FROM 
posts JOIN users
ON (posts.seller_id = users.id)
WHERE approved = false;