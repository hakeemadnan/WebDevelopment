-- CREATE DATABASE IF NOT EXISTS college2;
-- use college2;
-- CREATE TABLE teacher(
-- 	id int PRIMARY KEY,
--     name varchar(20),
--     subject varchar(20),
--     salary int 
-- );

-- insert into teacher
-- (id,name ,subject,salary)
-- values
-- (23,"ajay","math",50000),
-- (47,"bharat","english",60000),
-- (18,"chetan","chemistry",45000),
-- (9,"divya","physics",75000);

-- select * from teacher 
-- where salary > 55000;

ALTER TABLE teacher 
CHANGE COLUMN salary ctc int ;

SET sql_safe_updates =0; 

UPDATE teacher 
SET ctc =ctc +ctc*0.25;

ALTER TABLE teacher
ADD COLUMN city varchar(35) default "gurgoan";

ALTER TABLE teacher 
DROP COLUMN ctc;
select * from teacher;