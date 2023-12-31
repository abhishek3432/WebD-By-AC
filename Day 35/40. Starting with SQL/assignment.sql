-- Active: 1703612085512@@127.0.0.1@3306@instagram
drop database if exists Instagram;
create database if not exists Instagram;
use Instagram;
create table Posts(
	id int primary key,
    content varchar(32),
    user_id int
);

insert into Posts
values
(101, "hello World", 1),
(102, "Bye bye", 3),
(103, "hello delta", 2);
show databases;
show tables;
select * from Posts;


