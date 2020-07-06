-- -----------------------------------------------------
-- Schema housing_state
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `housing_state` ;
USE `housing_state` ;

-- -----------------------------------------------------
-- Table `housing_state`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `housing_state`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL, 
  `password` VARCHAR(45) NOT NULL,
  `type` VARCHAR(45),
  `sfsu_verified` BOOLEAN NULL DEFAULT FALSE,
  `created_at` TIMESTAMP NOT NULL,
  `updated_at` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`, `email`)) ;


-- -----------------------------------------------------
-- Table `housing_state`.`listings`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `housing_state`.`listings` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` VARCHAR(45) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  `zip_code` CHAR(5) NOT NULL,
  `street` VARCHAR(45) NOT NULL,
  `apt_suite` VARCHAR(45),
  `state` CHAR(2) NOT NULL,
  `cost` INT NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `lease_length` INT,
  `offer_type` VARCHAR(45),
  `bedroom_num` INT NOT NULL,
  `bathroom_num` FLOAT NOT NULL,
  `furnished` BOOLEAN,
  `area` FLOAT,
  `available_at` DATE,
  `created_at` TIMESTAMP NOT NULL,
  `updated_at` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `users`
    FOREIGN KEY (`id`)
    REFERENCES `housing_state`.`users` (`id`)) ;
    
    
-- -----------------------------------------------------
-- Table `housing_state`.`messaging`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `housing_state`.`messaging` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `to_user` INT NOT NULL,
  `from_user` INT NOT NULL,
  `text` VARCHAR(1000) NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  `updated_at` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `to_user_idx` (`from_user` ASC) VISIBLE,
  CONSTRAINT `from_user`
    FOREIGN KEY (`from_user`)
    REFERENCES `housing_state`.`users` (`id`),
  CONSTRAINT `to_user`
    FOREIGN KEY (`to_user`)
    REFERENCES `housing_state`.`users` (`id`)) ;
