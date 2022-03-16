-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 14, 2022 at 09:02 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `food_chain`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `title`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Fruits', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste soluta, pariatur nulla magnam quaerat molestias error, molestiae nostrum minus libero voluptatum quas accusamus quasi fugit mollitia quos sapiente provident sunt.', '2022-03-14 18:34:05', '2022-03-14 18:34:06'),
(2, 'Vegetables', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste soluta, pariatur nulla magnam quaerat molestias error, molestiae nostrum minus libero voluptatum quas accusamus quasi fugit mollitia quos sapiente provident sunt.', '2022-03-14 18:34:07', '2022-03-14 18:34:07'),
(3, 'Nuts & Seeds', 'Labore rem a quis suscipit. Et esse distinctio fugiat tempore ipsa ut dolores. Quia nihil quis accusamus quia quia. Sint placeat cum consequatur nesciunt minus non. Natus eos sunt molestiae dolores et pariatur. Consequatur nostrum a at repudiandae autem in sequi. Eligendi labore dolor fuga pariatur expedita ut.', '2022-03-14 10:51:42', '2022-03-14 10:51:42'),
(4, 'Herbs, Spices & Seasonings', 'Molestiae molestias sequi necessitatibus iure. Necessitatibus molestiae consectetur corporis quaerat qui ab tenetur. Ut laborum expedita animi fugit minima iure rerum esse. A quis facere at nisi officiis. Velit earum ratione quis et. Consequatur dolorum sit exercitationem et. Voluptatem nisi inventore incidunt. Vel consequatur est qui vero. Vel rem ea quos. Sequi consequatur necessitatibus autem laborum a quia vel. Sint vero quo voluptas velit molestias.', '2022-03-14 10:51:42', '2022-03-14 10:51:42'),
(5, 'Seafood', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste soluta, pariatur nulla magnam quaerat molestias error, molestiae nostrum minus libero voluptatum quas accusamus quasi fugit mollitia quos sapiente provident sunt.', '2022-03-14 18:34:05', '2022-03-14 18:34:06'),
(6, 'Grains, Cereal & Legumes', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste soluta, pariatur nulla magnam quaerat molestias error, molestiae nostrum minus libero voluptatum quas accusamus quasi fugit mollitia quos sapiente provident sunt.', '2022-03-14 18:34:07', '2022-03-14 18:34:07'),
(7, 'Simple Processed', 'Labore rem a quis suscipit. Et esse distinctio fugiat tempore ipsa ut dolores. Quia nihil quis accusamus quia quia. Sint placeat cum consequatur nesciunt minus non. Natus eos sunt molestiae dolores et pariatur. Consequatur nostrum a at repudiandae autem in sequi. Eligendi labore dolor fuga pariatur expedita ut.', '2022-03-14 10:51:42', '2022-03-14 10:51:42');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `files`
--

CREATE TABLE `files` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_path` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `files`
--

INSERT INTO `files` (`id`, `name`, `file_path`, `product_id`, `created_at`, `updated_at`) VALUES
(6, 'fruit10.jpg', '/public/products/fruit10.jpg', 4, '2022-03-14 10:53:43', '2022-03-14 10:53:43'),
(7, 'fruit11.jpg', '/public/products/fruit11.jpg', 4, '2022-03-14 10:54:14', '2022-03-14 10:54:14'),
(8, 'fruit12.jpg', '/public/products/fruit12.jpg', 4, '2022-03-14 10:54:47', '2022-03-14 10:54:47'),
(12, 'fruit13.jpg', '/public/products/fruit13.jpg', 4, '2022-03-14 10:52:40', '2022-03-14 10:52:40'),
(13, 'fruit20.jpg', '/public/products/fruit10.jpg', 3, '2022-03-14 10:53:43', '2022-03-14 10:53:43'),
(14, 'fruit21.jpg', '/public/products/fruit11.jpg', 3, '2022-03-14 10:54:14', '2022-03-14 10:54:14'),
(15, 'fruit22.jpg', '/public/products/fruit12.jpg', 3, '2022-03-14 10:54:47', '2022-03-14 10:54:47'),
(16, 'fruit23.jpg', '/public/products/fruit13.jpg', 3, '2022-03-14 10:52:40', '2022-03-14 10:52:40'),
(17, 'veget10.jpg', '/public/products/veget10.jpg', 6, '2022-03-14 10:54:14', '2022-03-14 10:54:14'),
(18, 'veget11.jpg', '/public/products/veget11.jpg', 6, '2022-03-14 10:54:47', '2022-03-14 10:54:47'),
(19, 'veget12.jpg', '/public/products/veget12.jpg', 6, '2022-03-14 10:52:40', '2022-03-14 10:52:40'),
(20, 'veget20.jpg', '/public/products/veget20.jpg', 7, '2022-03-14 10:53:43', '2022-03-14 10:53:43'),
(21, 'veget21.jpg', '/public/products/veget21.jpg', 7, '2022-03-14 10:54:14', '2022-03-14 10:54:14'),
(22, 'veget22.jpg', '/public/products/veget22.jpg', 7, '2022-03-14 10:54:47', '2022-03-14 10:54:47'),
(23, 'veget23.jpg', '/public/products/veget23.jpg', 7, '2022-03-14 10:52:40', '2022-03-14 10:52:40'),
(24, 'nuts10.jpg', '/public/products/nuts10.jpg', 5, '2022-03-14 10:53:43', '2022-03-14 10:53:43'),
(25, 'nuts11.jpg', '/public/products/nuts11.jpg', 5, '2022-03-14 10:54:14', '2022-03-14 10:54:14'),
(26, 'nuts12.jpg', '/public/products/nuts12.jpg', 5, '2022-03-14 10:54:47', '2022-03-14 10:54:47'),
(27, 'nuts13.jpg', '/public/products/nuts13.jpg', 5, '2022-03-14 10:52:40', '2022-03-14 10:52:40'),
(28, 'nuts20.jpg', '/public/products/nuts20.jpg', 8, '2022-03-14 10:53:43', '2022-03-14 10:53:43'),
(29, 'nuts21.jpg', '/public/products/nuts21.jpg', 8, '2022-03-14 10:54:14', '2022-03-14 10:54:14'),
(30, 'nuts22.jpg', '/public/products/nuts22.jpg', 8, '2022-03-14 10:54:47', '2022-03-14 10:54:47'),
(31, 'nuts23.jpg', '/public/products/nuts23.jpg', 8, '2022-03-14 10:52:40', '2022-03-14 10:52:40');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_03_12_191453_create_categories_table', 1),
(6, '2022_03_12_191552_create_products_table', 1),
(7, '2022_03_12_191619_create_files_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `variety` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `description`, `slug`, `price`, `country`, `variety`, `category_id`, `created_at`, `updated_at`) VALUES
(3, 'Fresh Banana', 'Impedit laudantium vitae voluptas mollitia tempore officiis. Rem voluptatem vel harum voluptatem id quia dolorum.', 'refined-sunflower-oil', 58, 'turkey', 'FAQ/Refind', 1, '2022-03-14 10:52:10', '2022-03-14 10:52:10'),
(4, 'Fresh MD2 Pineapple', 'Impedit laudantium vitae voluptas mollitia tempore officiis. Rem voluptatem vel harum voluptatem id quia dolorum.', 'refined-sunflower-oil', 58, 'turkey', 'FAQ/Refind', 1, '2022-03-14 10:52:39', '2022-03-14 10:52:39'),
(5, 'Sunflower Seed', 'Impedit laudantium vitae voluptas mollitia tempore officiis. Rem voluptatem vel harum voluptatem id quia dolorum.', 'whole-common-gigner', 6587, 'Brazil', 'FAQ/Refind', 3, '2022-03-14 10:53:43', '2022-03-14 10:53:43'),
(6, 'Whole Common Ginger', 'Impedit laudantium vitae voluptas mollitia tempore officiis. Rem voluptatem vel harum voluptatem id quia dolorum.', 'cashew-nut-kernel', 584, 'Egypt', 'FAQ/Refind', 2, '2022-03-14 10:54:14', '2022-03-14 10:54:14'),
(7, 'Fresh Bell Pepper', 'Impedit laudantium vitae voluptas mollitia tempore officiis. Rem voluptatem vel harum voluptatem id quia dolorum.', 'rew-cashew-nut', 584, 'Tanzanya', 'FAQ/Refind', 2, '2022-03-14 10:54:47', '2022-03-14 10:54:47'),
(8, 'Hazelnut Kernel', 'Impedit laudantium vitae voluptas mollitia tempore officiis. Rem voluptatem vel harum voluptatem id quia dolorum.', 'whole-common-gigner', 6587, 'Brazil', 'FAQ/Refind', 3, '2022-03-14 10:53:43', '2022-03-14 10:53:43');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `phone_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `phone_number`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@admin.com', '2022-03-14 10:51:24', '+201096121030', '$2y$10$HRXpyuRZJg9D2QMVs7DTeeyVQli8aotwCBeGB5ZVLqI6ZRr3BaCM.', '4ArWy0Q5MX', '2022-03-14 10:51:24', '2022-03-14 10:51:24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`),
  ADD KEY `files_product_id_foreign` (`product_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_category_id_foreign` (`category_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `files`
--
ALTER TABLE `files`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `files`
--
ALTER TABLE `files`
  ADD CONSTRAINT `files_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
