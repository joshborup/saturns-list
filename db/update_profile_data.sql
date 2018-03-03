UPDATE profiles
set profile_image = $1
FROM users
WHERE $2 = profiles.user_id;
SELECT profiles.id, profiles.description, profiles.profile_image, profiles.website FROM
profiles JOIN users
ON $2 = profiles.user_id LIMIT 1;