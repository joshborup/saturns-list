UPDATE posts
SET approved = true,
    active = true
WHERE id = $1;
SELECT * FROM posts
WHERE approved = false;