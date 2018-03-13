UPDATE users
SET password = $1,
    pass_reset_string = $3
WHERE pass_reset_string = $2;
