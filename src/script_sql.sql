-- Bảng level

INSERT INTO `levels` (`id`, `name`, `createdAt`, `updatedAt`, `difficulty`) VALUES
(1, 'Level 1', NOW(), NOW(), 'easy'),
(2, 'Level 1', NOW(), NOW(), 'medium'),
(3, 'Level 1', NOW(), NOW(), 'hard'),
(4, 'Level 2', NOW(), NOW(), 'easy'),
(5, 'Level 2', NOW(), NOW(), 'medium'),
(6, 'Level 2', NOW(), NOW(), 'hard'),
(7, 'Level 3', NOW(), NOW(), 'easy'),
(8, 'Level 3', NOW(), NOW(), 'medium'),
(9, 'Level 3', NOW(), NOW(), 'hard'),
(10, 'Level 4', NOW(), NOW(), 'easy'),
(11, 'Level 4', NOW(), NOW(), 'medium'),
(12, 'Level 4', NOW(), NOW(), 'hard'),
(13, 'Level 5', NOW(), NOW(), 'easy'),
(14, 'Level 5', NOW(), NOW(), 'medium'),
(15, 'Level 5', NOW(), NOW(), 'hard'),
(16, 'Level 6', NOW(), NOW(), 'easy'),
(17, 'Level 6', NOW(), NOW(), 'medium'),
(18, 'Level 6', NOW(), NOW(), 'hard'),
(19, 'Level 7', NOW(), NOW(), 'easy'),
(20, 'Level 7', NOW(), NOW(), 'medium'),
(21, 'Level 7', NOW(), NOW(), 'hard'),
(22, 'Level 8', NOW(), NOW(), 'easy'),
(23, 'Level 8', NOW(), NOW(), 'medium'),
(24, 'Level 8', NOW(), NOW(), 'hard'),
(25, 'Level 9', NOW(), NOW(), 'easy'),
(26, 'Level 9', NOW(), NOW(), 'medium'),
(27, 'Level 9', NOW(), NOW(), 'hard'),
(28, 'Level 10', NOW(), NOW(), 'easy'),
(29, 'Level 10', NOW(), NOW(), 'medium'),
(30, 'Level 10', NOW(), NOW(), 'hard'),
(31, 'Level 11', NOW(), NOW(), 'easy'),
(32, 'Level 11', NOW(), NOW(), 'medium'),
(33, 'Level 11', NOW(), NOW(), 'hard'),
(34, 'Level 12', NOW(), NOW(), 'easy'),
(35, 'Level 12', NOW(), NOW(), 'medium'),
(36, 'Level 12', NOW(), NOW(), 'hard'),
(37, 'Level 13', NOW(), NOW(), 'easy'),
(38, 'Level 13', NOW(), NOW(), 'medium'),
(39, 'Level 13', NOW(), NOW(), 'hard'),
(40, 'Level 14', NOW(), NOW(), 'easy'),
(41, 'Level 14', NOW(), NOW(), 'medium'),
(42, 'Level 14', NOW(), NOW(), 'hard'),
(43, 'Level 15', NOW(), NOW(), 'easy'),
(44, 'Level 15', NOW(), NOW(), 'medium'),
(45, 'Level 15', NOW(), NOW(), 'hard'),
(46, 'Level 16', NOW(), NOW(), 'easy'),
(47, 'Level 16', NOW(), NOW(), 'medium'),
(48, 'Level 16', NOW(), NOW(), 'hard'),
(49, 'Level 17', NOW(), NOW(), 'easy'),
(50, 'Level 17', NOW(), NOW(), 'medium'),
(51, 'Level 17', NOW(), NOW(), 'hard'),
(52, 'Level 18', NOW(), NOW(), 'easy'),
(53, 'Level 18', NOW(), NOW(), 'medium'),
(54, 'Level 18', NOW(), NOW(), 'hard'),
(55, 'Level 19', NOW(), NOW(), 'easy'),
(56, 'Level 19', NOW(), NOW(), 'medium'),
(57, 'Level 19', NOW(), NOW(), 'hard'),
(58, 'Level 20', NOW(), NOW(), 'easy'),
(59, 'Level 20', NOW(), NOW(), 'medium'),
(60, 'Level 20', NOW(), NOW(), 'hard');


-- Bảng item
INSERT INTO `items` (`id`, `name`, `createdAt`, `updatedAt`) VALUES 
(1, 'Hoa Hồng', NOW(), NOW()), 
(2, 'Hoa Trắng', NOW(), NOW()), 
(3, 'Lá Cây', NOW(), NOW()), 
(4, 'Kẹo', NOW(), NOW()), 
(5, 'Bánh', NOW(), NOW()), 
(6, 'Kẹo mút', NOW(), NOW());

-- Bảng achievements

INSERT INTO `achievements` (`id`, `name`, `createdAt`, `updatedAt`) VALUES 
('1', 'Khung đồng', NOW(), NOW()), 
('2', 'Khung bạc', NOW(), NOW()), 
('3', 'Khung vàng', NOW(), NOW()), 
('4', 'Khung kim cương', NOW(), NOW());

-- Bảng admins
INSERT INTO `admins` (`id`, `username`, `password`, `createdAt`, `updatedAt`)
VALUES 
('0', 'admin1','admin@thanhdoanthuduc', NOW(), NOW()), 
('1', 'admin2','admin@uit', NOW(), NOW());




