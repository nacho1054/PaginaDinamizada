-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-11-2021 a las 23:44:46
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `basedatos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productosonlinetuning`
--

CREATE TABLE `productosonlinetuning` (
  `id` int(11) NOT NULL,
  `nombre_producto` varchar(255) DEFAULT NULL,
  `precio` float DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productosonlinetuning`
--

INSERT INTO `productosonlinetuning` (`id`, `nombre_producto`, `precio`, `stock`, `descripcion`, `imagen`) VALUES
(1, 'Cubre llave', 500, 60, 'Cubre llave de silicona.', '../galeria productos/cubre llaves - 1.jpg'),
(2, 'Cubre volante MOMO', 1000, 5, 'Cubre volante universal marca MOMO.', '../galeria productos/cubre vol momo -1.jpg'),
(3, 'Escobilla', 750, 40, 'Juego de escobillas marca Bosch.', '../galeria productos/escobillas bosch - 1.jpg'),
(4, 'Faros led', 1050, 30, 'Faros de LED. Varios modelos.', '../galeria productos/faros led - 1.jpg'),
(5, 'Pasta de pulir Meguiars', 2000, 3, 'Pasta para pulir carrocerias, marca americana.', '../galeria productos/meguiars - 1.jpg'),
(6, 'Microfibras', 250, 100, 'Paños de microfibra para aplicación de productos.', '../galeria productos/microfibras - 1.jpg'),
(7, 'Organizador de baul', 1650, 10, 'Organizador para herramientas con abrojo.', '../galeria productos/organizador de baul - 1.jpg'),
(8, 'Shampoo Toxic Shine', 500, 30, 'Lavacoches especial para limpieza exterior del vehiculo. Marca nacional.', '../galeria productos/toxic shine - 1.jpg'),
(9, 'Cree led', 1100, 300, 'Kit de lamparas Cree led.', '../galeria productos/c6 mini - 1.jpg'),
(10, 'Shampoo Meguiars 3.75L', 2900, 5, 'Shampoo americano de ph neutro. Exelente calidad.', '../galeria productos/meguiars - 3.jpg'),
(11, 'Perfumes Toxic', 400, 20, 'Aromatizadores para vehículos de gran duracion. Marca nacional.', '../galeria productos/toxic shine - 5.jpg'),
(12, 'Cubre caliper', 1800, 60, 'Juego de cubre caliper color rojo logo Brembo.', '../galeria productos/cubre caliper - 1.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productosonlinetuning`
--
ALTER TABLE `productosonlinetuning`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productosonlinetuning`
--
ALTER TABLE `productosonlinetuning`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
