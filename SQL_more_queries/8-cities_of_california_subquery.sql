-- Write a script that lists all the cities of California that can be found in the database hbtn_0d_usa
-- The results must be sorted in ascending order by cities.id

SELECT id, name 
FROM cities 
WHERE state_id = (
    -- Subquery to find the id of the state 'California'
    SELECT id 
    FROM states 
    WHERE name = 'California'
)
ORDER BY id ASC;  -- Sort the results in ascending order by cities.id
