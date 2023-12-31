-- Active: 1703612085512@@127.0.0.1@3306@solar_system
create database Solar_system;
use solar_system;
create table earth(
    c_id int,
    country varchar(20),
    weather varchar(23)
);
insert into earth
VALUES
(1, "india", 125),
(2, "japan", 1);

select * from earth;