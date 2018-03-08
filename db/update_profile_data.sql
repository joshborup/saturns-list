UPDATE profiles
set profile_image = $2,
    description = $3,
    website = $4
FROM users
WHERE $1 = profiles.user_id;
SELECT profiles.id, profiles.description, profiles.profile_image, profiles.website FROM
profiles JOIN users
ON $1 = profiles.user_id LIMIT 1;