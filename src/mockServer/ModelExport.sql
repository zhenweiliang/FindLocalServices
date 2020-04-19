CREATE TABLE `ads` (
`id` int(11) NOT NULL,
`title` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
`img` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
`link` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
PRIMARY KEY (`id`) 
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE `city` (
`id` int(11) NOT NULL,
`city` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
PRIMARY KEY (`id`) 
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE `commend` (
`id` int(11) NOT NULL,
`title` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
`subTitle` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
`price` int(11) NULL DEFAULT NULL,
`distance` int(11) NULL DEFAULT NULL,
`number` int(11) NULL DEFAULT NULL,
`img` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
PRIMARY KEY (`id`) 
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE `comment` (
`id` int(11) NOT NULL,
`username` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
`comment` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
`star` int(11) NULL DEFAULT NULL,
`tradeid` int(11) NULL DEFAULT NULL,
PRIMARY KEY (`id`) 
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE `detail` (
`id` int(11) NOT NULL,
`img` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
`title` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
`star` int(11) NULL DEFAULT NULL,
`price` int(11) NULL DEFAULT NULL,
`subTitle` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
`desc` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
PRIMARY KEY (`id`) 
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE `swiper` (
`id` int(11) NOT NULL,
`imgUrl` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
`imgLink` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
PRIMARY KEY (`id`) 
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE `user` (
`id` int(11) NOT NULL,
`username` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
`password` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
PRIMARY KEY (`id`) 
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci;

