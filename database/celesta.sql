CREATE TABLE `distributors`(
    `distributor_id` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `location` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `brand` VARCHAR(255) NOT NULL,
    `items` VARCHAR(5120) NOT NULL
);
ALTER TABLE
    `distributors` ADD PRIMARY KEY `distributors_distributor_id_primary`(`distributor_id`);
ALTER TABLE
    `distributors` ADD UNIQUE `distributors_email_unique`(`email`);
CREATE TABLE `trader`(
    `trader_id` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `Name` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `location` VARCHAR(255) NOT NULL,
    `to_do` VARCHAR(5120) NOT NULL
);
ALTER TABLE
    `trader` ADD PRIMARY KEY `trader_trader_id_primary`(`trader_id`);
ALTER TABLE
    `trader` ADD UNIQUE `trader_email_unique`(`email`);
CREATE TABLE `items`(
    `item_id` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `tags` VARCHAR(255) NOT NULL,
    `brand` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `items` ADD PRIMARY KEY `items_item_id_primary`(`item_id`);
CREATE TABLE `tags`(
    `tags` VARCHAR(255) NOT NULL,
    `item_id` VARCHAR(5120) NOT NULL
);
ALTER TABLE
    `tags` ADD PRIMARY KEY `tags_tags_primary`(`tags`);
CREATE TABLE `brand`(`name` VARCHAR(255) NOT NULL);
ALTER TABLE
    `brand` ADD PRIMARY KEY `brand_name_primary`(`name`);
CREATE TABLE `login`(
    `login_id` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `login` ADD PRIMARY KEY `login_login_id_primary`(`login_id`);
CREATE TABLE `reviews`(
    `review_id` VARCHAR(255) NOT NULL,
    `review` VARCHAR(255) NOT NULL,
    `stars` INT NOT NULL,
    `review_by` VARCHAR(255) NOT NULL,
    `distributor` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `reviews` ADD PRIMARY KEY `reviews_review_id_primary`(`review_id`);
CREATE TABLE `orders`(
    `number` VARCHAR(255) NOT NULL,
    `distributor` VARCHAR(255) NOT NULL,
    `item` VARCHAR(255) NOT NULL,
    `ordered_on` DATE NOT NULL,
    `buyer` VARCHAR(255) NOT NULL,
    `order_id` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `orders` ADD PRIMARY KEY `orders_order_id_primary`(`order_id`);