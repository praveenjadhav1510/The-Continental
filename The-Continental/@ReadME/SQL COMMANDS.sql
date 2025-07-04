CREATE DATABASE userdata;
USE userdata;


CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL unique,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE bookinginfo (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255),
  checkin_date DATE,
  checkout_date DATE,
  number_of_people INT,
  room_preference ENUM('single', 'double', 'suite'),
  room_number INT UNIQUE
);



drop table users;
drop table bookinginfo;

SELECT * FROM userdata.users;
SELECT * FROM userdata.bookinginfo;

delete from users where id = 1;
delete from bookinginfo where id = 1;