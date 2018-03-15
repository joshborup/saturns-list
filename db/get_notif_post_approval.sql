SELECT name, id FROM Posts
WHERE notified = 'approved' AND seller_id = $1;
