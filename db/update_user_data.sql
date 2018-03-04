UPDATE Users
SET email = $2
WHERE id = $1;
SELECT * FROM Users
WHERE id = $1;