SELECT * FROM posts
WHERE catergory_id = $1 AND active = true
LIMIT 10 OFFSET $2;