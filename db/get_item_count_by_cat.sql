SELECT categories.name, count(*) FROM
posts JOIN categories
ON(catergory_id = categories.id)
WHERE active = true
GROUP by categories.name;