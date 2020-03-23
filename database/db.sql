CREATE DATABASE database_links; --criação bd

USE database_links; --utilizo a bd q foi criada

--criação 2 bd: usuadio e enlaces
--USERS Table
CREATE TABLE users(
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2; --0, 2, 4, ...

DESCRIBE users; --decrever a tabela usuarios

--LINKS Table
CREATE TABLE links (
    id INT(11) NOT NULL,
    title VARCHAR(150) NOT NULL,
    url VARCHAR(250) NOT NULL,
    description TEXT,
    user_id INT(11), --tem relação com a outra tabela (users)
    created_at timestamp NOT NULL DEFAULT current_timestamp, --informa a data de criação, e se regenera sozinho  e com data atual
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id) --chave secundaria
);

ALTER TABLE links
    ADD PRIMARY KEY (id);

ALTER TABLE links
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE links;