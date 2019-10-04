CREATE DATABASE mysimplecv;
CREATE TABLE "user" (
  id integer UNIQUE NOT NULL PRIMARY KEY, 
  name varchar(255), 
  username varchar(32) UNIQUE NOT NULL, 
  headline varchar(255), 
  summary text NOT NULL, 
  phone varchar(255), 
  email varchar(255) UNIQUE NOT NULL, 
  website varchar(255)
);