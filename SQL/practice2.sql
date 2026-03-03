use college2;
create table student_info(
	roll_no int primary key,
    name varchar(25),
    city varchar(25),
    marks int 
);
insert into student_info
(roll_no,name,city,marks)
values
(142,"mald","kerala",79);

select * from student_info
where marks>75;

select distinct city from student_info;

select city,max(marks) 
from student_info
group by city;

select avg(marks) from student_info;

ALTER TABLE student_info
ADD COLUMN grade varchar(2);

UPDATE student_info
SET grade ="O"
WHERE marks >=80;

UPDATE student_info
SET grade ="A"
WHERE marks >=70 AND marks<80;

UPDATE student_info
SET grade ="B"
WHERE marks >=60 AND marks<70;

UPDATE student_info
SET grade ="C"
WHERE marks >=50 AND marks<60;

SELECT * FROM student_info;