DROP DATABASE IF EXISTS "tm-portraits";
CREATE DATABASE "tm-portraits";

\c tm-portraits;

  /*req.file.buffer
  //req.mimetype
  //req.originalname
  //req.size*/

CREATE TYPE stamp  AS (
    by_user       VARCHAR(64),
    at_timestamp  TIMESTAMP
);

CREATE TABLE image (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(1024),
  mimetype VARCHAR(64),
  size BIGINT,
  file BYTEA,
  created stamp
);

CREATE OR REPLACE FUNCTION init_created_column()
RETURNS TRIGGER AS $creating_stamp$ 
BEGIN
    NEW.created := (CURRENT_USER, CURRENT_TIMESTAMP);
    RETURN NEW;
END;
$creating_stamp$ language 'plpgsql';

CREATE TRIGGER creating_stamp BEFORE INSERT ON image FOR EACH ROW EXECUTE PROCEDURE  init_created_column();