# Sword-of-the-abyss-API

<h2>Caso ocorra perda de dados =></h2>
<h3>Criar base de dados:</h3>
<h4>CREATE DATABASE `report_ticket_db`</h4>
<h3>Criar tabela de tickets:</h3>
<h4>CREATE TABLE `report_ticket_db`.`ticket` (`id` INT NOT NULL AUTO_INCREMENT , `title` CHAR(100) NOT NULL , `date` DATE NOT NULL , `type` CHAR(100) NOT NULL , `status` CHAR(100) NOT NULL DEFAULT 'Pendente' , `description` TEXT NOT NULL , `contact` CHAR(255) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;</h4>
<h3>Criar tabela de usuários:</h3>
<h4>CREATE TABLE `report_ticket_db`.`users` (`id` INT NOT NULL AUTO_INCREMENT , `email` VARCHAR(255) NOT NULL , `password` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`), UNIQUE (`email`)) ENGINE = InnoDB;</h4>

<h2>Como criar o usuário raíz?</h2>
<h4>- Primeiro vá para [Rotas de usuário](./src/routes/userRoute.js) e descomente as seguintes linhas: 13, 14</h4>