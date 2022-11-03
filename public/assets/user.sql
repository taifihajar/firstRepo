-- -------------------------------------------------------------
-- TablePlus 4.8.2(436)
--
-- https://tableplus.com/
--
-- Database: second
-- Generation Time: 2022-09-01 22:08:23.6920
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `role` text NOT NULL,
  `token` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `EMAIL` (`email`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;

INSERT INTO `user` (`id`, `email`, `password`, `role`, `token`) VALUES
(11, 'hichamoujari99@gmail.com', '2246fdc50879cd9f4fcb52f66bbf97fa', 'ROLE_USER', 'e97b1f0c84349a89c21e28170530d9f4'),
(14, 'hicha.moujari99@gmail.com', '2246fdc50879cd9f4fcb52f66bbf97fa', 'ROLE_MANAGER', NULL),
(15, 'hi.c,hamoujari99@gmail.com', '7066b4a6a679990c2284916a2c19769a', 'ROLE_MANAGER', NULL),
(17, 'hicha.moujardi99@gmail.com', 'bd1ffb33e5717c0cef0e122bd282b6c3', 'ROLE_MANAGER', NULL),
(18, 'hicha.mo.ujari99@gmail.com', 'bd1ffb33e5717c0cef0e122bd282b6c3', 'ROLE_MANAGER', NULL),
(19, 'hicha.modujari99@gmail.com', 'bd1ffb33e5717c0cef0e122bd282b6c3', 'ROLE_MANAGER', NULL),
(20, 'hicha.moujdari99@gmail.com', 'a259aa02ce8b026378c554df5fb050c1', 'ROLE_ADMIN', '01746cdb6a4c52d6fe2180c8c464780f'),
(21, 'hicha.mousdsfjdari99@gmail.com', 'a259aa02ce8b026378c554df5fb050c1', 'ROLE_USER', NULL),
(23, 'hicha.moujdasri99@gmail.com', 'a259aa02ce8b026378c554df5fb050c1', 'ROLE_ADMIN', NULL),
(24, 'hicha.moujarid99@gmail.com', 'e3f3279eb6f650145dd7914d937a6c30', 'ROLE_USER', '84ed99cebf7e4df616e37f09813c212c'),
(26, 'hicha.moujari99@gmail.comdd', 'bd1ffb33e5717c0cef0e122bd282b6c3', 'ROLE_MANAGER', NULL),
(27, 'hids@slkds.com', 'bbf67ce47e7f178d8950afa2510c3f03', 'ROLE_ADMIN', 'a0cb5965818f394150493907913337a2'),
(28, 'hidsdsdsds@slkds.com', '8f46a660becdc615b29d8403bb6bd518', 'ROLE_MANAGER', 'b1033a2148b99eb64e339cda48c08745'),
(33, 'hidsdsds@slkds.com', '66a6d7d7bcc2646c74165df3fb80aad1', 'ROLE_MANAGER', '5a6a33bfdb982081d9895202bb22e082');


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;