SELECT profiles.id, profiles.description, profiles.profile_image, profiles.website, profiles.instagram, profiles.facebook FROM
profiles JOIN users
ON $1 = profiles.user_id LIMIT 1;