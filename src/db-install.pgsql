DROP DATABASE IF EXISTS "tm-portraits";
CREATE DATABASE "tm-portraits" WITH TEMPLATE=template0 ENCODING='UTF8';

\c tm-portraits;

  /*req.file.buffer
  //req.mimetype
  //req.originalname
  //req.size*/

CREATE TYPE stamp  AS (
    by_user       VARCHAR(64),
    at_timestamp  TIMESTAMP
);

CREATE TABLE images (
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

CREATE TRIGGER creating_stamp BEFORE INSERT ON images FOR EACH ROW EXECUTE PROCEDURE  init_created_column();

CREATE DOMAIN price as NUMERIC(6,2);

CREATE TABLE "portrait-kinds" (
  NAME VARCHAR(40) PRIMARY KEY,
  PRICE PRICE
);

INSERT INTO "portrait-kinds" (name, price) VALUES ('Bleistiftporträt', 60.0);
INSERT INTO "portrait-kinds" (name, price) VALUES ('Buntstiftporträt', 80.0);
INSERT INTO "portrait-kinds" (name, price) VALUES ('Pastelporträt', 100.0);

CREATE TABLE "portrait-sizes" (
  name VARCHAR(2) PRIMARY KEY,
  width NUMERIC(4,1),
  height NUMERIC(4,1),
  min_subjects SMALLINT,
  max_subjects SMALLINT,
  price PRICE
);

INSERT INTO "portrait-sizes" (name, width, height, min_subjects, max_subjects) VALUES ('A4', 1.0, 1.0, 1, 2);
INSERT INTO "portrait-sizes" (name, width, height, min_subjects, max_subjects, price) VALUES ('A3', 1.0, 1.0, 1, 3, 15.0);
INSERT INTO "portrait-sizes" (name, width, height, min_subjects, max_subjects, price) VALUES ('A2', 1.0, 1.0, 1, 5, 30.0);

create TABLE "count-subjects" (
  count SMALLINT PRIMARY KEY,
  price PRICE
);

INSERT INTO "count-subjects" (count) VALUES (1);
INSERT INTO "count-subjects" (count, price) VALUES (2, 10.0);
INSERT INTO "count-subjects" (count, price) VALUES (3, 20.0);
INSERT INTO "count-subjects" (count, price) VALUES (4, 30.0);
INSERT INTO "count-subjects" (count, price) VALUES (5, 40.0);