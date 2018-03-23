UPDATE admin_message
SET message = $1;

UPDATE users
SET admin_message = false;