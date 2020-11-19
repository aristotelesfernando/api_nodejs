
drop table if EXISTS tb_herois;
create table tb_herois (
    id int GENERATE ALLWAYS as IDENTITY PRIMARY KEY NOT NULL,
    nome text NOT NULL,
    pode text NOT NULL
);


-- create
insert into tb_herois (nome, poder) values ('Flash','Velocidade');
insert into tb_herois (nome, poder) values ('Aquaman','Telepatia');
insert into tb_herois (nome, poder) values ('Batman','Dinheiro');
insert into tb_herois (nome, poder) values ('Goku','Deus');



-- read
select * from tb_herois
select * from tb_herois where nome = 'Batman'

-- update
update tb_herois set poder = 'Telepatia Marinha' where id = 2

-- delete 
delete from tb_herois where id = 2