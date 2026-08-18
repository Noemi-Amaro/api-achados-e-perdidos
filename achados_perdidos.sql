CREATE DATABASE achados_perdidos;
USE achados_perdidos;

CREATE TABLE `objetos` (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(255) NOT NULL,
descricao TEXT,
localEncontrado VARCHAR (255) NOT NULL,
dataEncontado DATE NOT NULL,
--obs: ao usar o tipo ENUM e não VARCHAR garante que o banco aceite apenas esses dois valores.
status ENUM ('ENCONTRADO', 'DEVOLVIDO') NOT NULL
);