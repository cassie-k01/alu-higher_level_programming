-- Create the table 'unique_id' if it does not already exist
CREATE TABLE IF NOT EXISTS `unique_id` (
    id INT UNIQUE DEFAULT 1,  -- Column 'id' with default value 1 and must be unique
    name VARCHAR(256)         -- Column 'name' with a maximum length of 256 characters
);
