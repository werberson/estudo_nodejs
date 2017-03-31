create schema estudo_nodejs;
use estudo_nodejs;

CREATE TABLE IF NOT EXISTS produtos (
	id INT NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    descricao VARCHAR(250) NOT NULL,
    preco DOUBLE NOT NULL,
    PRIMARY KEY(id)
);

insert into produtos values (1,'Começando com nodejs', 'Livro de introdução ao nodejs', 40.00);
insert into produtos values (2,'Começando com JavaScript', 'Livro de introdução ao JavaScript', 40.00);
insert into produtos values (3,'Começando com Java', 'Livro de introdução ao Java', 40.00);
insert into produtos values (4,'Começando com Swift', 'Livro de introdução ao Swift', 40.00);
insert into produtos values (5,'Começando com Python', 'Livro de introdução ao Python', 40.00);
