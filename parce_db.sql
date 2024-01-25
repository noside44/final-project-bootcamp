-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-01-2024 a las 05:22:38
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `parce_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add libro', 7, 'add_libro'),
(26, 'Can change libro', 7, 'change_libro'),
(27, 'Can delete libro', 7, 'delete_libro'),
(28, 'Can view libro', 7, 'view_libro'),
(29, 'Can add usuario', 8, 'add_usuario'),
(30, 'Can change usuario', 8, 'change_usuario'),
(31, 'Can delete usuario', 8, 'delete_usuario'),
(32, 'Can view usuario', 8, 'view_usuario'),
(33, 'Can add dispositivo', 10, 'add_dispositivo'),
(34, 'Can change dispositivo', 10, 'change_dispositivo'),
(35, 'Can delete dispositivo', 10, 'delete_dispositivo'),
(36, 'Can view dispositivo', 10, 'view_dispositivo'),
(37, 'Can add rol', 9, 'add_rol'),
(38, 'Can change rol', 9, 'change_rol'),
(39, 'Can delete rol', 9, 'delete_rol'),
(40, 'Can view rol', 9, 'view_rol'),
(41, 'Can add usuario rol', 11, 'add_usuariorol'),
(42, 'Can change usuario rol', 11, 'change_usuariorol'),
(43, 'Can delete usuario rol', 11, 'delete_usuariorol'),
(44, 'Can view usuario rol', 11, 'view_usuariorol'),
(45, 'Can add metricas', 12, 'add_metricas'),
(46, 'Can change metricas', 12, 'change_metricas'),
(47, 'Can delete metricas', 12, 'delete_metricas'),
(48, 'Can view metricas', 12, 'view_metricas'),
(49, 'Can add usuarios dispositivo', 14, 'add_usuariosdispositivo'),
(50, 'Can change usuarios dispositivo', 14, 'change_usuariosdispositivo'),
(51, 'Can delete usuarios dispositivo', 14, 'delete_usuariosdispositivo'),
(52, 'Can view usuarios dispositivo', 14, 'view_usuariosdispositivo'),
(53, 'Can add metricas dispositivo', 13, 'add_metricasdispositivo'),
(54, 'Can change metricas dispositivo', 13, 'change_metricasdispositivo'),
(55, 'Can delete metricas dispositivo', 13, 'delete_metricasdispositivo'),
(56, 'Can view metricas dispositivo', 13, 'view_metricasdispositivo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_user`
--

CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `auth_user`
--

INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
(1, 'pbkdf2_sha256$720000$GHYPzIYHoTgHUwNFFkwEDA$7i0a/s0Xu1CBp3B6GQ6XpCUISnBFUX2RP8C3oQx6eJ4=', '2024-01-16 19:59:57.824706', 1, 'noside44', '', '', 'ediconc9@outlook.com', 1, 1, '2024-01-16 04:35:43.586451');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_user_groups`
--

CREATE TABLE `auth_user_groups` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_user_user_permissions`
--

CREATE TABLE `auth_user_user_permissions` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dispositivo`
--

CREATE TABLE `dispositivo` (
  `idDispositivo` int(11) NOT NULL,
  `nombreDispositivo` varchar(45) NOT NULL,
  `referenciaDispositivo` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `dispositivo`
--

INSERT INTO `dispositivo` (`idDispositivo`, `nombreDispositivo`, `referenciaDispositivo`) VALUES
(1, 'Control de luz', '001'),
(2, 'Control de persiana', '002'),
(3, 'Control Infrarrojo', '003');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `django_admin_log`
--

INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`) VALUES
(1, '2024-01-18 05:24:28.296713', '1', 'luz cocina', 1, '[{\"added\": {}}]', 10, 1),
(2, '2024-01-18 05:24:47.110441', '1', 'luz cocina', 2, '[{\"changed\": {\"fields\": [\"Estado dispositivo\"]}}]', 10, 1),
(3, '2024-01-18 05:38:45.285674', '2', 'Usuario', 1, '[{\"added\": {}}]', 9, 1),
(4, '2024-01-18 05:38:54.508897', '3', 'Ventas', 1, '[{\"added\": {}}]', 9, 1),
(5, '2024-01-18 05:39:14.968245', '600', 'usuario prueba', 3, '', 8, 1),
(6, '2024-01-18 05:39:14.974163', '100', 'nuevo user', 3, '', 8, 1),
(7, '2024-01-18 05:39:14.976975', '6', 'prueba1', 3, '', 8, 1),
(8, '2024-01-18 05:39:14.986136', '3', 'usuario', 3, '', 8, 1),
(9, '2024-01-18 05:39:14.989066', '1', 'usuario editado', 3, '', 8, 1),
(10, '2024-01-18 05:39:55.406093', '1', 'Usuario Admin', 1, '[{\"added\": {}}]', 8, 1),
(11, '2024-01-18 05:40:36.263389', '2', 'Usuario Usuario', 1, '[{\"added\": {}}]', 8, 1),
(12, '2024-01-18 05:41:07.185008', '3', 'Usuario Ventas', 1, '[{\"added\": {}}]', 8, 1),
(13, '2024-01-18 05:41:41.077449', '4', 'Usuario Prueba', 1, '[{\"added\": {}}]', 8, 1),
(14, '2024-01-18 05:43:23.697743', '1', 'Control de luces', 2, '[{\"changed\": {\"fields\": [\"Nombredispositivo\"]}}]', 10, 1),
(15, '2024-01-18 05:45:44.718196', '2', 'Control de persiana', 1, '[{\"added\": {}}]', 10, 1),
(16, '2024-01-18 05:46:30.588441', '3', 'Control Infrarrojo', 1, '[{\"added\": {}}]', 10, 1),
(17, '2024-01-18 05:47:09.392811', '1', 'Luz Cocina', 1, '[{\"added\": {}}]', 14, 1),
(18, '2024-01-18 05:49:29.875422', '2', 'persiana cuarto', 1, '[{\"added\": {}}]', 14, 1),
(19, '2024-01-18 05:50:01.780715', '1', 'Consumo', 1, '[{\"added\": {}}]', 12, 1),
(20, '2024-01-18 21:37:30.390588', '3', 'tv sala', 1, '[{\"added\": {}}]', 14, 1),
(21, '2024-01-18 23:08:11.916015', '4', 'tv sala', 1, '[{\"added\": {}}]', 14, 1),
(22, '2024-01-19 03:41:27.220458', '1', 'MetricasDispositivo object (1)', 1, '[{\"added\": {}}]', 13, 1),
(23, '2024-01-19 03:42:01.974062', '3', 'MetricasDispositivo object (3)', 1, '[{\"added\": {}}]', 13, 1),
(24, '2024-01-19 03:46:07.967069', '2', 'voltaje', 1, '[{\"added\": {}}]', 12, 1),
(25, '2024-01-19 03:48:00.774419', '2', 'MetricasDispositivo object (2)', 1, '[{\"added\": {}}]', 13, 1),
(26, '2024-01-19 03:51:39.610088', '9', 'UsuarioRol object (9)', 1, '[{\"added\": {}}]', 11, 1),
(27, '2024-01-19 03:53:55.635844', '10', 'UsuarioRol object (10)', 1, '[{\"added\": {}}]', 11, 1),
(28, '2024-01-19 04:07:08.702134', '11', 'Ventas', 1, '[{\"added\": {}}]', 11, 1),
(29, '2024-01-19 04:09:16.546557', '12', 'Administrador', 1, '[{\"added\": {}}]', 11, 1),
(30, '2024-01-19 05:49:28.986605', '5', 'control de garaje', 3, '', 10, 1),
(31, '2024-01-19 05:49:29.007807', '4', 'control de puerta', 3, '', 10, 1),
(32, '2024-01-19 05:49:29.014587', '3', 'Control Infrarrojo', 3, '', 10, 1),
(33, '2024-01-19 05:49:29.017639', '2', 'Control de persiana', 3, '', 10, 1),
(34, '2024-01-19 05:49:29.028819', '1', 'Control de luces', 3, '', 10, 1),
(35, '2024-01-19 05:49:46.922373', '4', 'tv sala', 3, '', 14, 1),
(36, '2024-01-19 05:49:46.929342', '3', 'tv sala', 3, '', 14, 1),
(37, '2024-01-19 05:49:46.932567', '2', 'persiana cuarto', 3, '', 14, 1),
(38, '2024-01-19 05:49:46.937297', '1', 'Luz Cocina', 3, '', 14, 1),
(39, '2024-01-19 05:50:22.365794', '9', 'Usuario Admin - Administrador', 3, '', 11, 1),
(40, '2024-01-19 05:50:29.941165', '12', 'Usuario Prueba - Administrador', 3, '', 11, 1),
(41, '2024-01-19 05:50:29.944929', '11', 'Usuario Prueba - Ventas', 3, '', 11, 1),
(42, '2024-01-19 05:50:29.949130', '10', 'Usuario Ventas - Ventas', 3, '', 11, 1),
(43, '2024-01-19 05:50:39.246490', '3', 'Consumo - tv sala', 3, '', 13, 1),
(44, '2024-01-19 05:50:39.249481', '2', 'voltaje - persiana cuarto', 3, '', 13, 1),
(45, '2024-01-19 05:50:39.260567', '1', 'Consumo - Luz Cocina', 3, '', 13, 1),
(46, '2024-01-19 05:50:48.826338', '4', 'tv sala', 3, '', 14, 1),
(47, '2024-01-19 05:50:48.874658', '3', 'tv sala', 3, '', 14, 1),
(48, '2024-01-19 05:50:48.883581', '2', 'persiana cuarto', 3, '', 14, 1),
(49, '2024-01-19 05:50:48.892762', '1', 'Luz Cocina', 3, '', 14, 1),
(50, '2024-01-19 05:50:57.664336', '4', 'Usuario Prueba', 3, '', 8, 1),
(51, '2024-01-19 05:50:57.671188', '3', 'Usuario Ventas', 3, '', 8, 1),
(52, '2024-01-19 05:50:57.676116', '2', 'Usuario Usuario', 3, '', 8, 1),
(53, '2024-01-19 05:50:57.680420', '1', 'Usuario Admin', 3, '', 8, 1),
(54, '2024-01-19 05:51:06.504641', '5', 'control de garaje', 3, '', 10, 1),
(55, '2024-01-19 05:51:06.507160', '4', 'control de puerta', 3, '', 10, 1),
(56, '2024-01-19 05:51:06.511550', '3', 'Control Infrarrojo', 3, '', 10, 1),
(57, '2024-01-19 05:51:06.514548', '2', 'Control de persiana', 3, '', 10, 1),
(58, '2024-01-19 05:51:06.518882', '1', 'Control de luces', 3, '', 10, 1),
(59, '2024-01-19 05:51:31.999103', '3', 'Ventas', 3, '', 9, 1),
(60, '2024-01-19 05:51:32.004834', '2', 'Usuario', 3, '', 9, 1),
(61, '2024-01-19 05:51:32.007836', '1', 'Administrador', 3, '', 9, 1),
(62, '2024-01-19 05:51:39.812764', '5', 'control de garaje', 3, '', 10, 1),
(63, '2024-01-19 05:51:39.816238', '4', 'control de puerta', 3, '', 10, 1),
(64, '2024-01-19 05:51:39.821205', '3', 'Control Infrarrojo', 3, '', 10, 1),
(65, '2024-01-19 05:51:39.824207', '2', 'Control de persiana', 3, '', 10, 1),
(66, '2024-01-19 05:51:39.828502', '1', 'Control de luces', 3, '', 10, 1),
(67, '2024-01-19 05:52:42.307925', '5', 'control de garaje', 3, '', 10, 1),
(68, '2024-01-19 05:52:42.307925', '4', 'control de puerta', 3, '', 10, 1),
(69, '2024-01-19 05:52:42.323822', '3', 'Control Infrarrojo', 3, '', 10, 1),
(70, '2024-01-19 05:52:42.323822', '2', 'Control de persiana', 3, '', 10, 1),
(71, '2024-01-19 05:52:42.323822', '1', 'Control de luces', 3, '', 10, 1),
(72, '2024-01-19 05:53:33.912320', '2', 'voltaje', 3, '', 12, 1),
(73, '2024-01-19 05:53:33.915872', '1', 'Consumo', 3, '', 12, 1),
(74, '2024-01-19 05:53:42.337603', '5', 'control de garaje', 3, '', 10, 1),
(75, '2024-01-19 05:53:42.343407', '4', 'control de puerta', 3, '', 10, 1),
(76, '2024-01-19 05:53:42.346493', '3', 'Control Infrarrojo', 3, '', 10, 1),
(77, '2024-01-19 05:53:42.357349', '2', 'Control de persiana', 3, '', 10, 1),
(78, '2024-01-19 05:53:42.359254', '1', 'Control de luces', 3, '', 10, 1),
(79, '2024-01-19 05:54:32.606573', '1', 'Edison Chica', 1, '[{\"added\": {}}]', 8, 1),
(80, '2024-01-19 05:54:51.370431', '4', 'Administrador', 1, '[{\"added\": {}}]', 9, 1),
(81, '2024-01-19 05:58:43.995413', '13', 'Edison Chica - Administrador', 1, '[{\"added\": {}}]', 11, 1),
(82, '2024-01-19 06:14:41.979150', '6', 'control luz', 1, '[{\"added\": {}}]', 10, 1),
(83, '2024-01-19 06:14:54.144384', '5', 'Luz Cocina', 1, '[{\"added\": {}}]', 14, 1),
(84, '2024-01-19 22:44:11.994248', '1', 'Edison Chica - Administrador', 1, '[{\"added\": {}}]', 11, 1),
(85, '2024-01-19 22:44:33.340851', '5', 'Luz Cocina', 3, '', 14, 1),
(86, '2024-01-19 22:44:44.931504', '1', 'Edison Chica', 3, '', 8, 1),
(87, '2024-01-19 23:28:28.119498', '6', 'control luz', 3, '', 10, 1),
(88, '2024-01-19 23:30:10.177633', '4', 'Administrador', 3, '', 9, 1),
(89, '2024-01-19 23:44:20.822657', '7', 'luz', 1, '[{\"added\": {}}]', 10, 1),
(90, '2024-01-19 23:44:49.098408', '1', 'usuario1', 1, '[{\"added\": {}}]', 8, 1),
(91, '2024-01-19 23:48:56.055618', '1', 'Luz Cocina', 1, '[{\"added\": {}}]', 14, 1),
(92, '2024-01-19 23:49:17.089753', '1', 'usuario1', 3, '', 8, 1),
(93, '2024-01-20 04:07:15.383483', '5', 'Admin', 1, '[{\"added\": {}}]', 9, 1),
(94, '2024-01-20 04:07:26.632561', '1', 'Edison Chica - Admin', 1, '[{\"added\": {}}]', 11, 1),
(95, '2024-01-20 04:07:47.396725', '6', 'usuario', 1, '[{\"added\": {}}]', 9, 1),
(96, '2024-01-20 04:07:57.234731', '6', 'Usuario', 2, '[{\"changed\": {\"fields\": [\"Nombrerol\"]}}]', 9, 1),
(97, '2024-01-20 04:08:00.174111', '6', 'Usuario', 2, '[]', 9, 1),
(98, '2024-01-20 04:08:11.631505', '2', 'Mathias Ciro C - Usuario', 1, '[{\"added\": {}}]', 11, 1),
(99, '2024-01-20 04:24:44.353878', '1', 'Mathias Ciro C', 3, '', 8, 1),
(100, '2024-01-21 04:46:32.915814', '3', 'Mathias Ciro - Usuario', 1, '[{\"added\": {}}]', 11, 1),
(101, '2024-01-22 04:18:32.701666', '2', 'Edison Chica - Admin', 1, '[{\"added\": {}}]', 11, 1),
(102, '2024-01-22 04:39:57.549844', '3', 'Mathias Ciro - Usuario', 1, '[{\"added\": {}}]', 11, 1),
(103, '2024-01-22 17:30:54.846765', '1', 'Administrador', 2, '[{\"changed\": {\"fields\": [\"Nombrerol\"]}}]', 9, 1),
(104, '2024-01-23 00:05:47.180040', '2', 'Luz Cocina', 1, '[{\"added\": {}}]', 14, 1),
(105, '2024-01-23 00:06:03.087734', '3', 'persiana cuarto', 1, '[{\"added\": {}}]', 14, 1),
(106, '2024-01-23 00:08:16.784736', '4', 'persiana cuarto - Edison Chica', 1, '[{\"added\": {}}]', 14, 1),
(107, '2024-01-23 00:08:36.945416', '5', 'Luz Cocina - Mathias Cir', 1, '[{\"added\": {}}]', 14, 1),
(108, '2024-01-23 00:14:27.586458', '6', 'persiana cuarto - Edison Chica', 1, '[{\"added\": {}}]', 14, 1),
(109, '2024-01-23 01:31:07.325227', '7', 'Luz Cocina - Mathias Cir', 1, '[{\"added\": {}}]', 14, 1),
(110, '2024-01-23 01:47:16.753254', '8', 'persiana cuarto - Mathias Cir', 1, '[{\"added\": {}}]', 14, 1),
(111, '2024-01-23 01:49:24.389846', '2', 'Mathias Cir', 2, '[{\"changed\": {\"fields\": [\"Idusuario\"]}}]', 8, 1),
(112, '2024-01-23 01:49:33.343030', '1', 'Mathias Cir', 2, '[{\"changed\": {\"fields\": [\"Idusuario\"]}}]', 8, 1),
(113, '2024-01-23 01:50:08.778228', '3', 'Mathias Cir', 3, '', 8, 1),
(114, '2024-01-23 01:50:08.871035', '2', 'Mathias Cir', 3, '', 8, 1),
(115, '2024-01-23 01:50:08.879941', '1', 'Mathias Cir', 3, '', 8, 1),
(116, '2024-01-23 01:52:57.806710', '1', 'Mathias Cir - Administrador', 1, '[{\"added\": {}}]', 11, 1),
(117, '2024-01-23 01:53:08.086258', '3', 'Mathias Cir', 3, '', 8, 1),
(118, '2024-01-23 01:53:08.099881', '2', 'Mathias Cir', 3, '', 8, 1),
(119, '2024-01-23 01:53:08.102398', '1', 'Mathias Cir', 3, '', 8, 1),
(120, '2024-01-23 01:53:33.812927', '1', 'Edison Chica', 1, '[{\"added\": {}}]', 8, 1),
(121, '2024-01-23 01:54:03.978712', '2', 'Mathias Ciro', 1, '[{\"added\": {}}]', 8, 1),
(122, '2024-01-23 01:54:27.038686', '15', 'Control Infrarrojo', 1, '[{\"added\": {}}]', 10, 1),
(123, '2024-01-23 01:54:32.820619', '15', 'Control Infrarrojo', 2, '[{\"changed\": {\"fields\": [\"Referenciadispositivo\"]}}]', 10, 1),
(124, '2024-01-23 01:54:36.164617', '14', 'Control de luces', 2, '[]', 10, 1),
(125, '2024-01-23 01:55:15.744330', '1', 'Edison Chica - Administrador', 1, '[{\"added\": {}}]', 11, 1),
(126, '2024-01-23 01:55:22.947448', '2', 'Mathias Ciro - Usuario', 1, '[{\"added\": {}}]', 11, 1),
(127, '2024-01-23 01:55:43.178976', '9', 'Luz Cocina - Edison Chica', 1, '[{\"added\": {}}]', 14, 1),
(128, '2024-01-23 01:55:58.160673', '10', 'persiana cuarto - Edison Chica', 1, '[{\"added\": {}}]', 14, 1),
(129, '2024-01-23 01:56:49.665787', '11', 'Luz Habitación - Mathias Ciro', 1, '[{\"added\": {}}]', 14, 1),
(130, '2024-01-23 01:57:05.626648', '10', 'Persiana Cuarto - Edison Chica', 2, '[{\"changed\": {\"fields\": [\"Nombreusuariodispositivo\"]}}]', 14, 1),
(131, '2024-01-23 01:57:29.410762', '12', 'TV Sala - Edison Chica', 1, '[{\"added\": {}}]', 14, 1),
(132, '2024-01-23 01:58:00.264382', '13', 'TV Habitación - Mathias Ciro', 1, '[{\"added\": {}}]', 14, 1),
(133, '2024-01-23 03:18:10.210611', '13', 'TV Habitación - Mathias Ciro', 2, '[{\"changed\": {\"fields\": [\"Estado dispositivo\"]}}]', 14, 1),
(134, '2024-01-23 03:18:57.662204', '14', 'Persiana Habitación - Mathias Ciro', 1, '[{\"added\": {}}]', 14, 1),
(135, '2024-01-24 01:52:58.336916', '12', 'Mathias Ciro', 1, '[{\"added\": {}}]', 8, 1),
(136, '2024-01-24 07:50:49.891726', '2', 'Mathias Ciro', 2, '[{\"changed\": {\"fields\": [\"Idusuario\"]}}]', 8, 1),
(137, '2024-01-24 07:51:05.443094', '2', 'Mathias Ciro - Usuario', 1, '[{\"added\": {}}]', 11, 1),
(138, '2024-01-24 20:54:01.236896', '15', 'Luz Habitación - Mathias Ciro', 1, '[{\"added\": {}}]', 14, 1),
(139, '2024-01-24 20:54:23.742414', '2', 'Mathias Ciro', 3, '', 8, 1),
(140, '2024-01-24 20:54:34.741878', '2', 'Mathias Ciro', 2, '[{\"changed\": {\"fields\": [\"Idusuario\"]}}]', 8, 1),
(141, '2024-01-24 20:54:44.898141', '12', 'Mathias Ciro', 3, '', 8, 1),
(142, '2024-01-24 20:54:59.428340', '16', 'Luz Habitación - Mathias Ciro', 1, '[{\"added\": {}}]', 14, 1),
(143, '2024-01-24 20:55:11.375626', '17', 'Persiana Cuarto - Mathias Ciro', 1, '[{\"added\": {}}]', 14, 1),
(144, '2024-01-24 20:55:24.929364', '18', 'TV Sala - Mathias Ciro', 1, '[{\"added\": {}}]', 14, 1),
(145, '2024-01-24 20:58:07.951780', '2', 'Mathias Ciro - Usuario', 1, '[{\"added\": {}}]', 11, 1),
(146, '2024-01-24 21:30:05.603118', '19', 'Luz Cocina - Mathias Ciro', 1, '[{\"added\": {}}]', 14, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'auth', 'user'),
(5, 'contenttypes', 'contenttype'),
(10, 'parce_app', 'dispositivo'),
(7, 'parce_app', 'libro'),
(12, 'parce_app', 'metricas'),
(13, 'parce_app', 'metricasdispositivo'),
(9, 'parce_app', 'rol'),
(8, 'parce_app', 'usuario'),
(11, 'parce_app', 'usuariorol'),
(14, 'parce_app', 'usuariosdispositivo'),
(6, 'sessions', 'session');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2024-01-16 04:26:19.153254'),
(2, 'auth', '0001_initial', '2024-01-16 04:26:19.948988'),
(3, 'admin', '0001_initial', '2024-01-16 04:26:20.156229'),
(4, 'admin', '0002_logentry_remove_auto_add', '2024-01-16 04:26:20.168251'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2024-01-16 04:26:20.183148'),
(6, 'contenttypes', '0002_remove_content_type_name', '2024-01-16 04:26:20.272162'),
(7, 'auth', '0002_alter_permission_name_max_length', '2024-01-16 04:26:20.418004'),
(8, 'auth', '0003_alter_user_email_max_length', '2024-01-16 04:26:20.542152'),
(9, 'auth', '0004_alter_user_username_opts', '2024-01-16 04:26:20.549792'),
(10, 'auth', '0005_alter_user_last_login_null', '2024-01-16 04:26:20.599235'),
(11, 'auth', '0006_require_contenttypes_0002', '2024-01-16 04:26:20.603239'),
(12, 'auth', '0007_alter_validators_add_error_messages', '2024-01-16 04:26:20.611235'),
(13, 'auth', '0008_alter_user_username_max_length', '2024-01-16 04:26:20.629187'),
(14, 'auth', '0009_alter_user_last_name_max_length', '2024-01-16 04:26:20.651301'),
(15, 'auth', '0010_alter_group_name_max_length', '2024-01-16 04:26:20.704754'),
(16, 'auth', '0011_update_proxy_permissions', '2024-01-16 04:26:20.716894'),
(17, 'auth', '0012_alter_user_first_name_max_length', '2024-01-16 04:26:20.737897'),
(18, 'sessions', '0001_initial', '2024-01-16 04:26:20.784259'),
(19, 'parce_app', '0001_initial', '2024-01-16 05:23:34.846777'),
(20, 'parce_app', '0002_alter_usuario_options', '2024-01-16 05:25:05.676722'),
(21, 'parce_app', '0003_delete_libro_alter_usuario_table', '2024-01-16 05:26:17.977308'),
(22, 'parce_app', '0004_dispositivo_rol_usuariorol', '2024-01-18 05:15:39.406431'),
(23, 'parce_app', '0005_delete_dispositivo', '2024-01-18 05:21:57.106008'),
(24, 'parce_app', '0006_dispositivo', '2024-01-18 05:23:57.896685'),
(25, 'parce_app', '0007_metricas_usuariosdispositivo_alter_usuariorol_table_and_more', '2024-01-18 22:59:54.708358');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('0ki2qh7ry2voxm57kyhcjgdkn9b35wos', '.eJxVjEEOwiAQRe_C2hCgDDIu3XuGZhhGqRpISrsy3l2bdKHb_977LzXSupRx7TKPU1YnZdXhd0vED6kbyHeqt6a51WWekt4UvdOuLy3L87y7fweFevnWBMFdo0HLkD26gMlEZDEuW7DRWfTskbwwCIokpjhgGIIXz0eAZNT7A8e3N1M:1rPpbI:1etAkBZ6LfOoYnAfJ4yPyGCAhUd1h6UqQi6kowY2p3o', '2024-01-30 19:59:56.340141'),
('37w5gfux7txc73cx1mtjz80n6yv6ekch', '.eJxVjEEOwiAQRe_C2hCgDDIu3XuGZhhGqRpISrsy3l2bdKHb_977LzXSupRx7TKPU1YnZdXhd0vED6kbyHeqt6a51WWekt4UvdOuLy3L87y7fweFevnWBMFdo0HLkD26gMlEZDEuW7DRWfTskbwwCIokpjhgGIIXz0eAZNT7A8e3N1M:1rPpbJ:-VIUGwZb7t3QfrI3ytEeD7cu4lWODymgHPfZ6oYtbPs', '2024-01-30 19:59:57.832775'),
('gjjk2e1b6h8eugsjhp4sbnublxgvbumg', '.eJxVjEEOwiAQRe_C2hCgDDIu3XuGZhhGqRpISrsy3l2bdKHb_977LzXSupRx7TKPU1YnZdXhd0vED6kbyHeqt6a51WWekt4UvdOuLy3L87y7fweFevnWBMFdo0HLkD26gMlEZDEuW7DRWfTskbwwCIokpjhgGIIXz0eAZNT7A8e3N1M:1rPbBQ:0XXAdNAcRMTSF6i_yPaRH57xFp8W5jPUuVqTrdLUabM', '2024-01-30 04:36:16.884044');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `metricas`
--

CREATE TABLE `metricas` (
  `idMetricas` int(11) NOT NULL,
  `Dispositivo_idDispositivo` int(11) NOT NULL,
  `nombreMetrica` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `metricas-dispositivo`
--

CREATE TABLE `metricas-dispositivo` (
  `Usuarios-dispositivo_idUsuarios-dispositivo` int(11) NOT NULL,
  `Metricas_idMetricas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `parce_app_usuario`
--

CREATE TABLE `parce_app_usuario` (
  `idUsuario` int(11) NOT NULL,
  `nombresApellidosUsuarios` varchar(70) NOT NULL,
  `emailUsuario` varchar(45) NOT NULL,
  `contrasenaUsuario` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `idRol` int(11) NOT NULL,
  `nombreRol` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`idRol`, `nombreRol`) VALUES
(1, 'Administrador'),
(2, 'Usuario'),
(11, 'Ventas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `nombresApellidosUsuarios` varchar(70) NOT NULL,
  `emailUsuario` varchar(45) NOT NULL,
  `contrasenaUsuario` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `nombresApellidosUsuarios`, `emailUsuario`, `contrasenaUsuario`) VALUES
(1, 'Edison Chica Alvarez', 'edisonc9@outlook.com', 'admin1'),
(2, 'Mathias Ciro', '1@1.com', 'user');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario-rol`
--

CREATE TABLE `usuario-rol` (
  `Usuario_idUsuario` int(11) NOT NULL,
  `Rol_idRol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `usuario-rol`
--

INSERT INTO `usuario-rol` (`Usuario_idUsuario`, `Rol_idRol`) VALUES
(1, 1),
(2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios-dispositivo`
--

CREATE TABLE `usuarios-dispositivo` (
  `idUsuarios-dispositivo` int(11) NOT NULL,
  `Usuario_idUsuario` int(11) NOT NULL,
  `Dispositivo_idDispositivo` int(11) NOT NULL,
  `nombreUsuarioDispositivo` varchar(45) NOT NULL,
  `estado_dispositivo` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `usuarios-dispositivo`
--

INSERT INTO `usuarios-dispositivo` (`idUsuarios-dispositivo`, `Usuario_idUsuario`, `Dispositivo_idDispositivo`, `nombreUsuarioDispositivo`, `estado_dispositivo`) VALUES
(9, 1, 1, 'Luz Cocina', 0),
(10, 1, 2, 'Persiana Cuarto', 1),
(12, 1, 3, 'TV Sala', 1),
(16, 2, 1, 'Luz Habitación', 1),
(17, 2, 2, 'Persiana Cuarto', 0),
(18, 2, 3, 'TV Sala', 1),
(19, 2, 1, 'Luz Cocina', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indices de la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indices de la tabla `auth_user`
--
ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indices de la tabla `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  ADD KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`);

--
-- Indices de la tabla `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  ADD KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`);

--
-- Indices de la tabla `dispositivo`
--
ALTER TABLE `dispositivo`
  ADD PRIMARY KEY (`idDispositivo`);

--
-- Indices de la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`);

--
-- Indices de la tabla `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indices de la tabla `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Indices de la tabla `metricas`
--
ALTER TABLE `metricas`
  ADD PRIMARY KEY (`idMetricas`,`Dispositivo_idDispositivo`),
  ADD KEY `fk_Metricas_Dispositivo1_idx` (`Dispositivo_idDispositivo`);

--
-- Indices de la tabla `metricas-dispositivo`
--
ALTER TABLE `metricas-dispositivo`
  ADD PRIMARY KEY (`Usuarios-dispositivo_idUsuarios-dispositivo`,`Metricas_idMetricas`),
  ADD KEY `fk_metricas-dispositivo_Usuarios-dispositivo1_idx` (`Usuarios-dispositivo_idUsuarios-dispositivo`),
  ADD KEY `fk_metricas-dispositivo_Metricas1_idx` (`Metricas_idMetricas`);

--
-- Indices de la tabla `parce_app_usuario`
--
ALTER TABLE `parce_app_usuario`
  ADD PRIMARY KEY (`idUsuario`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`idRol`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`),
  ADD UNIQUE KEY `idUsuario_UNIQUE` (`idUsuario`);

--
-- Indices de la tabla `usuario-rol`
--
ALTER TABLE `usuario-rol`
  ADD PRIMARY KEY (`Usuario_idUsuario`,`Rol_idRol`),
  ADD KEY `fk_Usuario-rol_Usuario_idx` (`Usuario_idUsuario`),
  ADD KEY `fk_Usuario-rol_Rol1_idx` (`Rol_idRol`);

--
-- Indices de la tabla `usuarios-dispositivo`
--
ALTER TABLE `usuarios-dispositivo`
  ADD PRIMARY KEY (`idUsuarios-dispositivo`,`Usuario_idUsuario`,`Dispositivo_idDispositivo`),
  ADD KEY `fk_Usuarios-dispositivo_Usuario1_idx` (`Usuario_idUsuario`),
  ADD KEY `fk_Usuarios-dispositivo_Dispositivo1_idx` (`Dispositivo_idDispositivo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT de la tabla `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `dispositivo`
--
ALTER TABLE `dispositivo`
  MODIFY `idDispositivo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=147;

--
-- AUTO_INCREMENT de la tabla `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `metricas`
--
ALTER TABLE `metricas`
  MODIFY `idMetricas` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `idRol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `usuarios-dispositivo`
--
ALTER TABLE `usuarios-dispositivo`
  MODIFY `idUsuarios-dispositivo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Filtros para la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Filtros para la tabla `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Filtros para la tabla `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Filtros para la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Filtros para la tabla `metricas`
--
ALTER TABLE `metricas`
  ADD CONSTRAINT `fk_Metricas_Dispositivo1` FOREIGN KEY (`Dispositivo_idDispositivo`) REFERENCES `dispositivo` (`idDispositivo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `metricas-dispositivo`
--
ALTER TABLE `metricas-dispositivo`
  ADD CONSTRAINT `fk_metricas-dispositivo_Metricas1` FOREIGN KEY (`Metricas_idMetricas`) REFERENCES `metricas` (`idMetricas`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_metricas-dispositivo_Usuarios-dispositivo1` FOREIGN KEY (`Usuarios-dispositivo_idUsuarios-dispositivo`) REFERENCES `usuarios-dispositivo` (`idUsuarios-dispositivo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuario-rol`
--
ALTER TABLE `usuario-rol`
  ADD CONSTRAINT `fk_Usuario-rol_Rol1` FOREIGN KEY (`Rol_idRol`) REFERENCES `rol` (`idRol`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Usuario-rol_Usuario` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios-dispositivo`
--
ALTER TABLE `usuarios-dispositivo`
  ADD CONSTRAINT `fk_Usuarios-dispositivo_Dispositivo1` FOREIGN KEY (`Dispositivo_idDispositivo`) REFERENCES `dispositivo` (`idDispositivo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Usuarios-dispositivo_Usuario1` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
