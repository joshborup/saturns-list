UPDATE profiles
set profile_image = $2,
    description = $3,
    website = $4,
    facebook = $5,
    instagram = $6,
    astrobin=$7
FROM users
WHERE $1 = profiles.user_id;
SELECT profiles.id, profiles.description, profiles.profile_image, profiles.website, profiles.facebook, profiles.instagram, profiles.astrobin FROM
profiles JOIN users
ON $1 = profiles.user_id LIMIT 1;