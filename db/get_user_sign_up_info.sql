
SELECT Count(*) FROM users
WHERE member_since LIKE 'Jan%' AND member_since LIKE '%2018'
UNION ALL
SELECT Count(*) FROM users
WHERE member_since LIKE 'Feb%' AND member_since LIKE '%2018'
UNION ALL
SELECT Count(*) FROM users
WHERE member_since LIKE 'Mar%' AND member_since LIKE '%2018'
UNION ALL
SELECT Count(*) FROM users
WHERE member_since LIKE 'Apr%' AND member_since LIKE '%2018'
UNION ALL
SELECT Count(*) FROM users
WHERE member_since LIKE 'May%' AND member_since LIKE '%2018'
UNION ALL
SELECT Count(*) FROM users
WHERE member_since LIKE 'Jun%' AND member_since LIKE '%2018'
UNION ALL
SELECT Count(*) FROM users
WHERE member_since LIKE 'Jul%' AND member_since LIKE '%2018'
UNION ALL
SELECT Count(*) FROM users
WHERE member_since LIKE 'Aug%' AND member_since LIKE '%2018'
UNION ALL
SELECT Count(*) FROM users
WHERE member_since LIKE 'Sep%' AND member_since LIKE '%2018'
UNION ALL
SELECT Count(*) FROM users
WHERE member_since LIKE 'Oct%' AND member_since LIKE '%2018'
UNION ALL
SELECT Count(*) FROM users
WHERE member_since LIKE 'Nov%' AND member_since LIKE '%2018'
UNION ALL
SELECT Count(*) FROM users
WHERE member_since LIKE 'Dec%' AND member_since LIKE '%2018';