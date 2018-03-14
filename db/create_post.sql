INSERT INTO posts
(seller_id, catergory_id, time_posted, name, description, price, condition, active, image_path, approved)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);