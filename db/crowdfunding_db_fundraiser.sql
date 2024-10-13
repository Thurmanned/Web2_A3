-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: crowdfunding_db
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Table structure for table `fundraiser`
--

DROP TABLE IF EXISTS `fundraiser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fundraiser` (
  `FUNDRAISER_ID` int NOT NULL AUTO_INCREMENT,
  `ORGANIZER` varchar(255) NOT NULL,
  `CAPTION` varchar(255) NOT NULL,
  `TARGET_FUNDING` decimal(10,2) NOT NULL,
  `CURRENT_FUNDING` decimal(10,2) NOT NULL,
  `CITY` varchar(255) NOT NULL,
  `ACTIVE` tinyint(1) NOT NULL,
  `CATEGORY_ID` int DEFAULT NULL,
  `CATEGORY` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`FUNDRAISER_ID`),
  KEY `CATEGORY_ID` (`CATEGORY_ID`),
  CONSTRAINT `fundraiser_ibfk_1` FOREIGN KEY (`CATEGORY_ID`) REFERENCES `category` (`CATEGORY_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fundraiser`
--

LOCK TABLES `fundraiser` WRITE;
/*!40000 ALTER TABLE `fundraiser` DISABLE KEYS */;
INSERT INTO `fundraiser` VALUES (51,'Tianwei Sun','Fund for Education',15000.00,7000.00,'Boston',1,9,'Education'),(52,'Chenshuo Wang','Health Awareness Campaign',25000.00,12000.00,'San Diego',0,10,'Health'),(53,'BangBang','Tree Planting Initiative',20000.00,10000.00,'Portland',0,11,'Environment'),(54,'Zichen Yang','Help Abandoned Pets',10000.00,4000.00,'Dallas',1,12,'Animal Welfare'),(55,'Yijie Yang','Local Development Project',30000.00,15000.00,'Philadelphia',1,13,'Community Development'),(56,'William Jones','Support Local Students',20000.00,8000.00,'Chicago',0,9,'Education'),(57,'Sophia Brown','Access to Medical Care',30000.00,20000.00,'Houston',1,10,'Health'),(58,'Liam Garcia','Clean Up the Oceans',25000.00,9000.00,'Miami',1,11,'Environment'),(59,'Ava Martinez','Animal Adoption Fair',15000.00,6000.00,'Atlanta',0,12,'Animal Welfare'),(60,'Noah Wilson','Improve Our Community',18000.00,5000.00,'Seattle',1,13,'Community Development');
/*!40000 ALTER TABLE `fundraiser` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-01 18:25:19
