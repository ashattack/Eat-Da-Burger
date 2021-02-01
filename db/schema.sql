-- Drops the wishes_db if it already exists --
DROP DATABASE IF EXISTS burger_db;
-- Create the database wishes_db and specified it for use.
CREATE DATABASE burger_db;
USE burger_db;
-- Create the table wishes.
CREATE TABLE burgers (
  id int AUTO_INCREMENT PRIMARY KEY,
  burger varchar(255),
  devoured BOOLEAN
);
