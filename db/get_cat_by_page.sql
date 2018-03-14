SELECT * FROM posts
WHERE catergory_id = $1 AND active = true AND approved = true
LIMIT 10 OFFSET $2;