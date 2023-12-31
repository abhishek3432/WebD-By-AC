-- Active: 1703612085512@@127.0.0.1@3306@solar_system

-- v10 about creating table which is already covered

create database if not exists Solar_system;
use solar_system;
create table earth(
    c_id int  ,
    country varchar(20) PRIMARY KEY,
    weather int default 30, 
    constraint check_id check (c_id <3)
    
);
insert into earth
VALUES
(1, "india", 125),
(2, "japan", 1);


create table continent (
    country varchar(23) ,
    cntry_population int,
    foreign key (country) REFERENCES earth(country)
);
select * from earth;
drop database if exists solar_system;