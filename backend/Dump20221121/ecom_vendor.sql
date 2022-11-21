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
-- Table structure for table `vendor`
--

DROP TABLE IF EXISTS `vendor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor` (
  `v_id` int NOT NULL AUTO_INCREMENT,
  `v_name` varchar(300) NOT NULL,
  `v_contact` varchar(200) NOT NULL,
  `v_address` varchar(200) NOT NULL,
  `v_email` varchar(405) NOT NULL,
  `v_pass` varchar(450) NOT NULL,
  PRIMARY KEY (`v_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor`
--

LOCK TABLES `vendor` WRITE;
/*!40000 ALTER TABLE `vendor` DISABLE KEYS */;
INSERT INTO `vendor` VALUES (1,'John','123456789','Ahmedabad','john@mail.com','123456'),(2,'Nisarg','154564','asdasdasd','nisarg@gmail.com','$2a$10$sSS.OXKW5YwpIiiOAlhIPuztdQXlRUOsk/Xd.ibaTYQNAiLDMe8fe'),(11,'Aniket','5148914564','156451458','aniket@gmail.com','$2a$10$gg.icwSBKDG6VRR.tKhqxOClKqcoSf8RfuuPtN8Cjq7bcSjPIILHu'),(12,'Aniket','1245554616','45645484','anike21t@gmail.com','$2a$10$dcKv3n70PKxrqtwzPXkrTeibRxhlEgUyTeTPXiLiB3rGeOeO3LsBq'),(13,'Aniket','1245554616','45645484','anike212t@gmail.com','$2a$10$uO3SIOBsufJGHI.e70DzAOXobFMZX361FCOw0IRrbg41YPVeUtFeK'),(14,'Aniket','123124123','asdfasdfaf','nisasrg@gmail.com','$2a$10$xxosIa8XrqnNZ6Bz9VFm7emDgKMi5d0Gks6Fbe3LqCZtlPV1wSdUW'),(15,'rohit','124567892','asdasfa','rohit@gmail.com','$2a$10$Zt2ywpEd8GISt2bQ7hwiFOgb1/9hzrKjl6ggZ0iCiP3jO9uYvMxKG'),(16,'Nisarg','1234456789','123456','nisarg1@gmail.com','$2a$10$rxYfnBmbOcVVg5DR.Sh/CerNDtIK.bejW/pIOR6ry51HChT7N1VYa'),(17,'Aniket','1234567899','byucrbhy','aniket1@gmailo.com','$2a$10$M.to9Efh0uieifh6LnITiuTDYOoS2aaBybzIQTW5lQQPEzbWPBcRi'),(18,'Aniket','','','','$2a$10$Ez3bjg9dv6sey49m2ueEwOaVPO4ThR8xhae806NoFN/6baC3kQTaq'),(19,'Nisarg','123456789','abd','nisarg25@gmail.com','$2a$10$57K3J9hm/r1OYwUjmZPj..gddKbUrHNbZ28wN2iFPZqp/ou5OsdPK'),(20,'Nisarg','124545484764','ancd','nis12@mail.com','$2a$10$3G3A7SuYx3MAchDT0JIaBOntuY50FjVYUDzNKOML2rHpVO05Bkuem'),(25,'Nisarg','7894545641','Ahmed','mistry.nisarg.24@gmail.com','$2a$10$81L3qAldW5sNggFAMyqUkOrSW/5FHJruzTyO99ZNnE/qtBOr3m0.2'),(26,'Aniket','1234567899','Patan','aniketbhatiya68@gmail.com','$2a$10$rxStm7uA3Rt2gXy0APxg8.DQ/Vb8MzQoMa0/lHrHyanf8fKg5Q9b6'),(27,'ritik','123456789','ABD','ritikmewada@gmail.com','$2a$10$21B3mhvoCy8dn6KUD7uXLOw1tOp.seN1z9uO6GFXvA0xUuEq2DTFC'),(28,'Nivedita','1234567899','ABD','nivedita.sinha2068@gmail.com','$2a$10$L4/.RX5Gm5x2leskSqSGy.p7rz8kzD8gTFxv5Z8.LGH7WqPC6/aNm'),(29,'Nivedita','123456789','VAPI','niveditasinha1003@gmail.com','$2a$10$oEn3NmOFx2.wPSWeiZkO6ORQ1kkSOG65JvxVtEvp4qb1J3ezdxIpi'),(30,'Samik','123456789','ABD','samik.pandit17@gmail.com','$2a$10$ENJyrPE9G39VIkS9rOudbuvJm1ijg7Gs.76bXBLncs4qiDDh81hZm');
/*!40000 ALTER TABLE `vendor` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-21 11:08:58
