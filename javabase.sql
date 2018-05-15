-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 24, 2018 at 02:03 PM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `javabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `clothes`
--

CREATE TABLE `clothes` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `color` varchar(10) DEFAULT NULL,
  `size` int(6) DEFAULT NULL,
  `price` int(6) DEFAULT NULL,
  `gender` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `clothes`
--

INSERT INTO `clothes` (`id`, `name`, `color`, `size`, `price`, `gender`) VALUES
(1, 'coat', 'red', 12, 100, 'male'),
(2, 'coat', 'red', 12, 100, 'male'),
(3, 'coat', 'red', 12, 100, 'male'),
(4, 'coat', 'red', 12, 100, 'male'),
(5, 'coat', 'red', 12, 100, 'male'),
(6, 'coat', 'red', 12, 100, 'male'),
(7, 'coat', 'red', 12, 100, 'male'),
(8, 'coat', 'red', 12, 100, 'male'),
(9, 'coat', 'red', 12, 100, 'male'),
(10, 'coat', 'red', 12, 100, 'male'),
(11, 'coat', 'red', 12, 100, 'male'),
(12, 'coat', 'red', 12, 100, 'male'),
(13, 'coat', 'red', 12, 100, 'male'),
(14, 'coat', 'red', 12, 100, 'male'),
(15, 'coat', 'red', 12, 100, 'male'),
(16, 'coat', 'red', 12, 100, 'male'),
(17, 'coat', 'red', 12, 100, 'male'),
(18, 'coat', 'red', 12, 100, 'male'),
(19, 'coat', 'red', 12, 100, 'male'),
(20, 'coat', 'red', 12, 100, 'male'),
(21, 'coat', 'red', 12, 100, 'male'),
(22, 'coat', 'red', 12, 100, 'male'),
(23, 'coat', 'red', 12, 100, 'male'),
(24, 'coat', 'red', 12, 100, 'male'),
(25, 'coat', 'red', 12, 100, 'male'),
(26, 'coat', 'red', 12, 100, 'male'),
(27, 'coat', 'red', 12, 100, 'male'),
(28, 'coat', 'red', 12, 100, 'male'),
(29, 'coat', 'red', 12, 100, 'male'),
(30, 'coat', 'red', 12, 100, 'male'),
(31, 'coat', 'red', 12, 100, 'male');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clothes`
--
ALTER TABLE `clothes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clothes`
--
ALTER TABLE `clothes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
