# Sword-of-the-abyss-API

<h2 align-items="center">Métodos permitidos</h2> 
<h3 align-items="center">get, getById, getByTag, getByStatus, post, put, delete, truncate, checkUser<h3>
<h2 align-items="center">Caso haja perda de dados</h2>
<h3 align-items="center">Criar base de dados</h3>
<h4>CREATE DATABASE `report_suggestion_db`</h4>
<h3 align-items="center">Criar tabela de tickets</h3>
<h4>CREATE TABLE `report_suggestion_db`.`ticket` (`id` INT NOT NULL AUTO_INCREMENT , `title` CHAR(100) NOT NULL , `data` DATE NOT NULL , `type` CHAR(100) NOT NULL , `status` CHAR(100) NOT NULL DEFAULT 'Pendente' , `description` TEXT NOT NULL , `contact` CHAR(255) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;</h4>
<h3 align-items="center">Criar tabela de usuários</h3>
<h4>CREATE TABLE `report_ticket_db`.`users` (`user` VARCHAR(100) NOT NULL , `password` VARCHAR(100) NOT NULL , UNIQUE (`user`)) ENGINE = InnoDB;</h4>
<h3 align-items="center">Criar usuários</h3>
<h4>INSERT INTO `users`(`user`, `password`) VALUES ('nome_usuario','senha_usuario')</h4>