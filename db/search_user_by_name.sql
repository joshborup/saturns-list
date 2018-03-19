SELECT users.id, users.username, member_since, profile_image, count(posts.*) FROM
users FULL JOIN profiles
ON (users.id = profiles.user_id) FULL JOIN posts
ON (profiles.user_id = posts.seller_id)
WHERE username ILIKE concat('%', $1, '%')
GROUP BY users.id, profile_image;