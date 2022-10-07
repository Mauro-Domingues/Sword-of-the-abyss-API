# Sword-of-the-abyss-API

<h2>Métodos permitidos:</h2>
<ul>
    <li>get</li>
    <li>getById</li>
    <li>getByTag</li>
    <li>getByStatus</li>
    <li>post</li>
    <li>put</li>
    <li>delete</li>
    <li>truncate</li>
    <li>checkUser</li>
</ul>
<h2>Caso ocorra perda de dados =></h2>
<h3>Criar base de dados:</h3>
<h4>CREATE DATABASE `report_ticket_db`</h4>
<h3>Criar tabela de tickets:</h3>
<h4>CREATE TABLE `report_ticket_db`.`ticket` (`id` INT NOT NULL AUTO_INCREMENT , `title` CHAR(100) NOT NULL , `data` DATE NOT NULL , `type` CHAR(100) NOT NULL , `status` CHAR(100) NOT NULL DEFAULT 'Pendente' , `description` TEXT NOT NULL , `contact` CHAR(255) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;</h4>
<h3>Criar tabela de usuários:</h3>
<h4>CREATE TABLE `report_ticket_db`.`users` (`id` INT NOT NULL AUTO_INCREMENT , `email` VARCHAR(255) NOT NULL , `password` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`), UNIQUE (`email`)) ENGINE = InnoDB;</h4>
<h3>Criar usuários:</h3>
<h4>INSERT INTO `users`(`user`, `password`) VALUES ('nome_usuario','senha_usuario')</h4>