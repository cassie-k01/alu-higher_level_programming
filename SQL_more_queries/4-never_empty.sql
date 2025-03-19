-- Create the table 'id_not_null' if it does not already exist
CREATE TABLE IF NOT EXISTS `id_not_null` (
    id INT DEFAULT 1,         -- Column 'id' with default value 1
    name VARCHAR(256)         -- Column 'name' with a maximum length of 256 characters
);
