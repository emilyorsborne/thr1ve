CREATE DATABASE IF NOT EXISTS resolutions_db;
USE resolutions_db;

# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS resolutions;

# Create the burgers table
CREATE TABLE resolutions (
id int NOT NULL AUTO_INCREMENT,
resolution_name varchar(255) NOT NULL,
accomplished BOOL DEFAULT false,
PRIMARY KEY (id)
);
