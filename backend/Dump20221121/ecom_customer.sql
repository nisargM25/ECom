-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: ecom
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `c_id` int NOT NULL AUTO_INCREMENT,
  `c_name` varchar(255) NOT NULL,
  `c_contact` int NOT NULL,
  `c_email` varchar(405) NOT NULL,
  `c_password` varchar(450) NOT NULL,
  `c_address` varchar(950) DEFAULT 'Address not added',
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'Nisarg',123,'nisarg@yahoo.com','123456','21354'),(2,'Aniket',1245687564,'ani@gmail.com','$2a$10$YhT38RX7PWsm6aAJS07V7OS1iMTDJ0jtTBSzDRuzaJQgqRVB3dJsa','abcd'),(3,'ani',846548789,'ani@mailo.com','$2a$10$ZEPZklzFiQuhrVDjcGrah.qMlFXfo/waqZ0oBSQXVGL59glk0ThG.','abc'),(4,'Aniket',1245687564,'anik@gmail.com','$2a$10$XbJoQ63j4OhUyQkSEBoMpO1tetwZB75aEXj2Ucjmg8l7Obr0goMKe','abcd'),(5,'nivi',123456789,'nivi@gmail.com','$2a$10$XLk38MFky0rxqDsBvb2Qw.MtnU1JtXWbli9cFgIxd274TSrEMH/dy','Abad'),(6,'Ritik',12456789,'ritik@gmail.com','$2a$10$70gQ.AFcdSspkaww6KSnNOryOMn6ysuKineJYdLtmz8s8kTrfc.qW','ABD'),(7,'Nisarg',123456789,'nik1122@gmail.com','$2a$10$1qosrXAMQa4ab3TgSSGlpekZsJKJIr/BDW4LZcVCHQgPe1AoXFI.C','ABD'),(8,'Aniket',1245687564,'anik21345@gmail.com','$2a$10$n/v6IE0s2q46xGk1gsmZ9uShbf6jtgRQoL5ftWA8DoUBEXWBHp7x2','abcd'),(9,'Aniket',1245687564,'anik2134335@gmail.com','$2a$10$FNsncRjeq6ati/OaFhp5qeixWd8gUGPhC5YzpRgBwZGgrBKKbvXKe','abcd'),(10,'Nisarg',154561564,'ani@mailo00.com','$2a$10$62.fkssUyHOvX9UgXgqQCukeJ6y5fFnOw0QLnrAmFSZrYZdavkRZm','adasd'),(11,'ritik',1234568954,'ritik12@gmail.com','$2a$10$o9XMdD4yYwXGN./KT5UhT./W9l9d4vcjfT6Pv.kaq5nkluQKpSO2a','ABDA'),(12,'Nisarg',1564815464,'nisarg@gmail.com','$2a$10$V9vdaSyL9GQnu./XBBWiKe5BWLxRtDHcknBaxN9cNVOvOHUcn73/u','ABD');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-21 11:08:57
