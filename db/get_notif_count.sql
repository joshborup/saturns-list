SELECT
(SELECT COUNT(*) FROM reviews WHERE notified = 'new' AND user_id = $1) +
(SELECT COUNT(*) FROM posts WHERE notified = 'approved' AND seller_id = $1)
AS count