SELECT profiles.id, profiles.description, profiles.profile_image, profiles.website, profiles.instagram, profiles.facebook, profiles.astrobin FROM
profiles JOIN users
ON $1 = profiles.user_id LIMIT 1;