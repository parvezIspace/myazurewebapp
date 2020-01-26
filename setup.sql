CREATE USER dbuser1 WITH PASSWORD='dbuser@11111';
CREATE USER dbuser2 WITH PASSWORD='dbuser@22222';

Create TABLE users 
(
    id INT IDENTITY PRIMARY KEY,
    name NVARCHAR(255),
    email NVARCHAR(255)
);
