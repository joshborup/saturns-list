SELECT count(*) FROM posts
WHERE active = true
UNION ALL
SELECT count(*) FROM posts
WHERE active = false;