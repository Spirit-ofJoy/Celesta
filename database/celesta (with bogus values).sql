-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: celesta
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brand` (
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES ('Coca Cola'),('HaldiRam'),('Sirpur Paper Mills');
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `distributors`
--

DROP TABLE IF EXISTS `distributors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `distributors` (
  `distributor_id` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `items` varchar(5120) NOT NULL,
  PRIMARY KEY (`distributor_id`),
  UNIQUE KEY `distributors_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `distributors`
--

LOCK TABLES `distributors` WRITE;
/*!40000 ALTER TABLE `distributors` DISABLE KEYS */;
INSERT INTO `distributors` VALUES ('administ','admin@admin.com','874125369','[\"SRK Mall\",\"Khandari\",\"\",\"\",\"Agra\",\"Uttar Pradesh\",\"\",\"India\"]','27.21,77.9997','Padmavat Co.','This is all Cold Drinks. Always have been','Coca Cola','[[\"trumnseq\",364,89],[\"qnnaidos\",899,12]]'),('allinall','coca@coca.com','324879621','[\"Near Bank of Baroda\",\"Sanjay Palace\", \"\",\"\",\"Agra\",\"Uttar Pradesh\",\"\",\"India\"]','27.18,78.00','Cool Down Co.','Zubaan Kesai........','Coca Cola','[[\"trumnseq\",364,100],[\"qnnaidos\",1200,12],[\"amkslodm\",500,10]]'),('username','user@user.com','123456789','[\"Ram Bagh\",\"Firozabad Road\",\"\",\"\",\"Agra\",\"Uttar Pradesh\",\"282001\"]','28.2,78.0','Hindustan Co.','Trust in us will take you far','HaldiRam','[[\"abhpoivt\",780,90],[\"natysipw\",658,21]]'),('utymqxfv','paper@paper.com','302145698','[\"Ram Bagh\",\"Firozabad Road\",\"\",\"\",\"Agra\",\"Uttar Pradesh\",\"282001\"]','28.2,78.0','GrowMore Co.','We sell something. Buy it and you will know it.','Sirpur Paper Mills','[[\"ncyiwodb\",50000,50],[\"gcuspoqg\",25000,50]]'),('xeryioul','dist@dist.com','784125693','[\"Near Bank of Baroda\",\"Sanjay Palace\", \"\",\"\",\"Agra\",\"Uttar Pradesh\",\"\",\"India\"]','27.18,78.00','Test the Paper ASAP','I have seen enough. I am satisfied.','Sirpur Paper Mills','[[\"gcuspoqg\",22000,50]]');
/*!40000 ALTER TABLE `distributors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `item_id` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `tags` varchar(255) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES ('abhpoivt','Lite le. Aloo Bhujia hai bro.','Chakhna;','HaldiRam','Aloo Bhujia'),('amkslodm','Darr Ke Aage Jeet Hai','Cold-drink;cocacola;','Coca Cola','Mountain Dew'),('gcuspoqg','these is a Rim of A2 sized papers made by one of the most trusted Brands of India','raw;raw-material;paper;','Sirpur Paper Mills','Sirpur A2 Rim'),('natysipw','A sweet that melts in your mouth and makes you reach Heaver. NTA cyanide','Chakhna;','HaldiRam','Soan Papdi'),('ncyiwodb','these is a Rim of A1 sized papers made by one of the most trusted Brands of India','raw;raw-material;paper;','Sirpur Paper Mills','Sirpur A1 Rim'),('qnnaidos','This is a lime flavoured Carbonated Drink','Cold-drink;','Coca Cola','Limca'),('trumnseq','This is a Coke flavoured Carbonated drink','Cold-drink;','Coca Cola','Coca Cola');
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `login_id` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`login_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES ('administ','pass','admin@admin.com'),('allinall','pepsi','coca@coca.com'),('superuse','quickpass','superuser@superuser.com'),('username','password','user@user.com'),('utymqxfv','mill','paper@paper.com'),('xeryioul','distance','dist@dist.com');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `number` varchar(255) NOT NULL,
  `distributor` varchar(255) NOT NULL,
  `item` varchar(255) NOT NULL,
  `ordered_on` date NOT NULL,
  `buyer` varchar(255) NOT NULL,
  `order_id` varchar(255) NOT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `review_id` varchar(255) NOT NULL,
  `review` varchar(255) NOT NULL,
  `stars` int NOT NULL,
  `review_by` varchar(255) NOT NULL,
  `distributor` varchar(255) NOT NULL,
  PRIMARY KEY (`review_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tags` (
  `tags` varchar(255) NOT NULL,
  `item_id` varchar(5120) NOT NULL,
  PRIMARY KEY (`tags`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES ('Chakhna','[\"abhpoivt\",\"natysipw\"]'),('cocacola','[\"amkslodm\"]'),('Cold-drink','[\"qnnaidos\",\"trumnseq\"]'),('paper','[\"ncyiwodb\",\"gcuspoqg\"]'),('raw','[\"ncyiwodb\",\"gcuspoqg\"]'),('raw-material','[\"ncyiwodb\",\"gcuspoqg\"]');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trader`
--

DROP TABLE IF EXISTS `trader`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trader` (
  `trader_id` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `to_do` varchar(5120) NOT NULL,
  PRIMARY KEY (`trader_id`),
  UNIQUE KEY `trader_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trader`
--

LOCK TABLES `trader` WRITE;
/*!40000 ALTER TABLE `trader` DISABLE KEYS */;
INSERT INTO `trader` VALUES ('superuse','superuser@superuser.com','DeshMukh Traders','1488687668','[\"Near Agra Fort\",\"RakabGanj\",\"\",\"\",\"Agra\",\"Uttar Pradesh\",\"\",\"India\"]','27.17,78.02','[\"lmao\",\"lmolllll\"]');
/*!40000 ALTER TABLE `trader` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'celesta'
--

--
-- Dumping routines for database 'celesta'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-19 10:32:44
