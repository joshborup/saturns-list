SELECT posts.*, categories.name as cat_name FROM 
posts JOIN categories
ON (categories.id = posts.catergory_id)
WHERE posts.id = $1;