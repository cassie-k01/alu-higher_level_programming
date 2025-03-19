-- Create the database 'hbtn_0d_usa' if it does not already exist
CREATE DATABASE IF NOT EXISTS `hbtn_0d_usa`;

-- Use the 'hbtn_0d_usa' database
USE `hbtn_0d_usa`;

-- Create the table 'cities' if it does not already exist
CREATE TABLE IF NOT EXISTS `cities` (
    id INT UNIQUE NOT NULL PRIMARY KEY AUTO_INCREMENT,  -- Column 'id' which is unique, not null, primary key, and auto-incremented
    state_id INT NOT NULL,                              -- Column 'state_id' which is not null
    name VARCHAR(256) NOT NULL,                         -- Column 'name' with a maximum length of 256 characters and cannot be null
    FOREIGN KEY (state_id) REFERENCES states(id)        -- Foreign key 'state_id' referencing 'id' in 'states' table
);
