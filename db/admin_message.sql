UPDATE users
SET admin_message = true
WHERE id = $1;
SELECT * FROM users
WHERE id = $1;