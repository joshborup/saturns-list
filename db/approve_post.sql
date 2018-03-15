UPDATE posts
SET approved = true,
    active = true,
    notified = 'approved'
WHERE id = $1;
SELECT * FROM posts
WHERE approved = false;