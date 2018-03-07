SELECT count(*) FROM Posts
WHERE catergory_id = $1 AND active = true;