SELECT * FROM posts
WHERE catergory_id = $1 
AND active = true;