-- Create the database 'hbtn_0d_usa' if it does not already exist
CREATE DATABASE IF NOT EXISTS `hbtn_0d_usa`;

-- Use the 'hbtn_0d_usa' database
USE `hbtn_0d_usa`;

-- Create the table 'states' if it does not already exist
CREATE TABLE IF NOT EXISTS `states` (
    id INT UNIQUE NOT NULL PRIMARY KEY AUTO_INCREMENT,  -- Column 'id' which is unique, not null, primary key, and auto-incremented
    name VARCHAR(256) NOT NULL                          -- Column 'name' with a maximum length of 256 characters and cannot be null
);
