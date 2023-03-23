-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2023 at 07:20 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `assignment2`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `userType` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `password`, `userType`, `createdAt`, `updatedAt`) VALUES
(2, 'james', 'sebidijel@mailinator.com', '$2b$10$xtdb4BcuCO7OWjlCi9234eCPi.4ZVKDEt27NoMGpH2Vntb1/4apl2', 2, '2023-03-21 15:09:53', '2023-03-21 15:18:28'),
(3, 'Praesentium laboris ', 'rujododi@mailinator.com', '$2b$10$8ewLYok3NaG5Dboo6V6QbujwLE/33FQjdGCnwe12HLqnD6qMB2Rg.', 1, '2023-03-21 15:17:19', '2023-03-21 15:17:19'),
(4, 'Insaf Inhaam', 'insafinhaam732@gmail.com', '$2b$10$VP6ZXWDXA7P3HSKdRyvJ3e5ew7ncmqfBz4Rkg9jcz1CtE/5a3BrCy', 0, '2023-03-23 05:53:10', '2023-03-23 13:34:09'),
(7, 'Reprehenderit possi', 'mytefizy@mailinator.com', '$2b$10$OGltUH2f5hrxkokv12ZghOx7ivpYEhmxvd0.FSJam/QpyKbm9nAz2', 2, '2023-03-23 06:35:25', '2023-03-23 06:35:44');

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `itemName` varchar(255) DEFAULT NULL,
  `amount` varchar(255) DEFAULT NULL,
  `orderId` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `itemName`, `amount`, `orderId`, `status`, `firstname`, `lastname`, `email`, `phone`, `address`, `city`, `createdAt`, `updatedAt`) VALUES
(1, 'Smart Watch', '25000', '1679480187016dt2r31d2c', 2, 'Insaf', 'Inhaam', 'insafinhaam732@gmail.com', 775539978, '45A, Green Lane Colombo -13', 'colombo', '2023-03-22 10:18:39', '2023-03-22 10:18:39');

-- --------------------------------------------------------

--
-- Table structure for table `quiz`
--

CREATE TABLE `quiz` (
  `id` int(11) NOT NULL,
  `question` varchar(255) DEFAULT NULL,
  `answer1` varchar(255) DEFAULT NULL,
  `answer2` varchar(255) DEFAULT NULL,
  `answer3` varchar(255) DEFAULT NULL,
  `answer4` varchar(255) DEFAULT NULL,
  `correctAnswer` varchar(255) DEFAULT NULL,
  `quizbelong` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quiz`
--

INSERT INTO `quiz` (`id`, `question`, `answer1`, `answer2`, `answer3`, `answer4`, `correctAnswer`, `quizbelong`, `createdAt`, `updatedAt`) VALUES
(1, 'What should a strong password contain?', 'Quae quidem eligendi', 'Enim commodi exercit', 'Enim do labore vel u', 'Ad voluptates except', '3', 1, '2023-03-22 05:51:45', '2023-03-22 06:38:32'),
(2, 'Which answer describes the \"Anatomical Position?\"', 'Standing erect, facing the observer, arms at the side, and palms facing to your side', 'Standing erect, facing the observer, arms at the side, and palms facing forward', 'Standing erect, facing the observer, arms at the side, and palms facing back', 'Standing erect, facing the observer, arms at the side, and palms facing outward', '2', 1, '2023-03-22 05:51:59', '2023-03-22 05:52:48'),
(3, 'Mollit autem omnis e', 'Doloremque laudantiu', 'Ipsum veritatis del', 'Quis eligendi sunt q', 'Qui sed labore quasi', '2', 1, '2023-03-22 05:52:07', '2023-03-22 05:52:07'),
(4, 'Which answer describes the \"Anatomical Position?\"', 'Standing erect, facing the observer, arms at the side, and palms facing to your side', 'Standing erect, facing the observer, arms at the side, and palms facing forward', 'Standing erect, facing the observer, arms at the side, and palms facing back', 'Standing erect, facing the observer, arms at the side, and palms facing outward', '2', 3, '2023-03-22 09:25:33', '2023-03-22 09:25:33'),
(5, 'Which statement is correct?', 'The neck is superior to the pelvis', 'The chest is inferior to the stomach.', 'The hip is superior to the shoulder.', 'The ribs are superior to the chin.', '1', 3, '2023-03-22 09:26:25', '2023-03-22 09:26:25'),
(6, 'Mrs. Jones is walking toward you. You are looking at her from a (an)_______________view?', 'Posterior', 'Dorsal', 'Anterior', 'Proximal', '3', 3, '2023-03-22 09:27:01', '2023-03-22 09:27:01'),
(7, 'Which statement is correct?', 'The inside of the thigh is lateral to the outside of the thigh.', 'The shoulder is lateral to the neck.', 'The knee is lateral to the hip.', 'The ankle is medial to the foot.', '2', 3, '2023-03-22 09:28:01', '2023-03-22 09:28:01'),
(8, 'Which statement is correct?', 'The knee is proximal to the hip.', 'The hip is proximal to the knee.', 'The shoulder is distal to the elbow.', 'The knee is distal to the ankle.', '2', 3, '2023-03-22 09:28:47', '2023-03-22 09:28:47'),
(9, 'What should a strong password contain?', 'Numbers', 'Capital Letters', 'Capital Letters and Numbers', 'Punctuation, Capital Letters, Lowercase Letters and Spaces', '4', 4, '2023-03-22 09:37:48', '2023-03-22 09:37:48'),
(10, 'How many characters should a strong password have?', '22', '28', '30', '16', '4', 4, '2023-03-22 10:08:37', '2023-03-22 10:08:37'),
(11, 'Where is RAM placed?', 'On Hard Disk', 'On Extension board', 'On Motherboard', 'On USB', '3', 4, '2023-03-22 10:09:10', '2023-03-22 10:09:10'),
(12, 'What does internet security do to help your computer?', 'It clears all the viruses and trojans from your system.', 'it keeps you from downloading internet files.', 'It stops you from accessing the internet.', 'It messes with your computers operating system?', '1', 4, '2023-03-22 10:09:45', '2023-03-22 10:09:45'),
(13, 'What is an embedded system?', 'A Hoover', 'An Animal', 'A Car', 'A Micro Processor', '4', 4, '2023-03-22 10:10:14', '2023-03-22 10:10:14'),
(14, 'Why are you recommended to back up your files?', 'So that if you lose files you have a copy of them?', 'So if you delete something if you still have it?', 'So if you lose your computer you have a backup/copy?', 'If your computer goes wrong you have a backup?', '1', 4, '2023-03-22 10:11:07', '2023-03-22 10:11:07');

-- --------------------------------------------------------

--
-- Table structure for table `quizcat`
--

CREATE TABLE `quizcat` (
  `id` int(11) NOT NULL,
  `quiz_title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quizcat`
--

INSERT INTO `quizcat` (`id`, `quiz_title`, `description`, `author`, `createdAt`, `updatedAt`) VALUES
(1, 'quiz test1', 'Adipisicing officia as', 'Voluptatum sunt sed ', '2023-03-22 05:51:20', '2023-03-22 10:12:38'),
(2, 'quiz test 2', 'need to make mobile app for ordering food', 'Quos ipsum eligendissc', '2023-03-22 05:51:26', '2023-03-22 10:12:49'),
(3, 'Anatomical Terminology Quiz: How Well Do You Know?', 'How well do you know the anatomical terminology? Play our well-researched anatomical terms quiz, mainly designed to help test your knowledge of the anatomical language, directional terminology, movement of joints, etc. This quiz consists of various ultima', 'Insaf Inhaam', '2023-03-22 09:25:10', '2023-03-22 09:25:10'),
(4, 'ICT Practice Questions And Answers', 'Hey, are you searching for good ICT practice questions and answers for your upcoming exam? Take this trivia quiz and learn some important things about information technology. ICT stands for Information Communication Technology, which covers all the digita', 'Insaf Inhaam', '2023-03-22 09:37:13', '2023-03-22 09:37:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`id`),
  ADD KEY `quizbelong` (`quizbelong`);

--
-- Indexes for table `quizcat`
--
ALTER TABLE `quizcat`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `quiz`
--
ALTER TABLE `quiz`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `quizcat`
--
ALTER TABLE `quizcat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `quiz`
--
ALTER TABLE `quiz`
  ADD CONSTRAINT `quiz_ibfk_1` FOREIGN KEY (`quizbelong`) REFERENCES `quizcat` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
