﻿# Sword-of-the-abyss-API
 
 get, getById, getByTag, post, put, delete
 
 CREATE TABLE `report_suggestion_db`.`ticket` (`id` INT NOT NULL AUTO_INCREMENT , `title` CHAR(100) NOT NULL , `data` DATETIME NOT NULL , `type` CHAR(100) NOT NULL , `status` CHAR(100) NOT NULL DEFAULT 'Pendente' , `description` TEXT NOT NULL , `contact` CHAR(255) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;
