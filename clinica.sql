-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-02-2020 a las 02:46:26
-- Versión del servidor: 10.4.8-MariaDB
-- Versión de PHP: 7.2.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `clinica`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cita`
--

CREATE TABLE `cita` (
  `id_cita` int(11) NOT NULL,
  `fecha_cita` date NOT NULL,
  `hora_cita` time NOT NULL,
  `lugar_cita` varchar(50) NOT NULL,
  `comentario` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cita`
--

INSERT INTO `cita` (`id_cita`, `fecha_cita`, `hora_cita`, `lugar_cita`, `comentario`) VALUES
(1, '2020-02-18', '12:00:00', 'Soacha', 'PRIMERA CITA'),
(2, '2020-02-18', '17:17:00', 'BOGOTA', 'SEGUNDA CITA'),
(3, '2014-12-24', '07:00:00', 'ATLANTICO', ''),
(4, '1998-01-01', '08:00:00', 'BOGOTA', ''),
(5, '1998-03-17', '09:00:00', 'BOLIVAR', ''),
(6, '1991-07-25', '10:00:00', 'BOYACA', ''),
(7, '1996-03-19', '11:00:00', 'CALDAS', ''),
(8, '2013-08-07', '12:00:00', 'CAQUETA', ''),
(9, '1993-09-18', '13:00:00', 'CAUCA', ''),
(10, '2016-11-07', '14:00:00', 'CESAR', ''),
(11, '2011-02-08', '15:00:00', 'CORDOBA', ''),
(12, '2009-08-20', '16:00:00', 'CUNDINAMARCA', ''),
(13, '2017-05-25', '05:00:00', 'CHOCO', ''),
(14, '2016-01-02', '06:00:00', 'HUILA', ''),
(15, '1990-04-11', '07:00:00', 'LA GUAJIRA', ''),
(16, '2012-01-26', '08:00:00', 'MAGDALENA', ''),
(17, '2007-12-21', '09:00:00', 'META', ''),
(18, '1992-08-01', '05:00:00', 'NARI?O', ''),
(19, '2009-07-17', '06:00:00', 'HUILA', ''),
(20, '1996-07-09', '07:00:00', 'LA GUAJIRA', ''),
(21, '1998-02-06', '08:00:00', 'MAGDALENA', ''),
(22, '2010-07-21', '09:00:00', 'HUILA', ''),
(23, '1992-04-02', '12:00:00', 'LA GUAJIRA', ''),
(24, '2017-11-04', '13:00:00', 'MAGDALENA', ''),
(25, '2015-06-05', '14:00:00', 'META', ''),
(26, '2019-03-11', '07:00:00', 'BOGOTA', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especialidad_medica`
--

CREATE TABLE `especialidad_medica` (
  `id_especialidad` int(11) NOT NULL,
  `Descripcion` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `especialidad_medica`
--

INSERT INTO `especialidad_medica` (`id_especialidad`, `Descripcion`) VALUES
(1, 'MEDICINA GENERAL'),
(2, 'Ortopedista');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medico`
--

CREATE TABLE `medico` (
  `identificacion_med` int(12) NOT NULL,
  `tipo_identificacion_med` varchar(11) DEFAULT NULL,
  `nombre_med` varchar(50) DEFAULT NULL,
  `apellido_med` varchar(50) DEFAULT NULL,
  `municipio_med` varchar(50) DEFAULT NULL,
  `dirección_med` varchar(50) DEFAULT NULL,
  `especialidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `medico`
--

INSERT INTO `medico` (`identificacion_med`, `tipo_identificacion_med`, `nombre_med`, `apellido_med`, `municipio_med`, `dirección_med`, `especialidad`) VALUES
(1012415555, 'CC', 'DIEGO', 'SANCHES', 'SOACHA', 'CALLE FALSA 357', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medico_cita`
--

CREATE TABLE `medico_cita` (
  `cod_medico` int(11) DEFAULT NULL,
  `cod_cita` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `medico_cita`
--

INSERT INTO `medico_cita` (`cod_medico`, `cod_cita`) VALUES
(1012415555, 1),
(1012415555, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

CREATE TABLE `paciente` (
  `identificacion_pac` int(11) NOT NULL,
  `tipo_identificacion_pac` varchar(3) DEFAULT NULL,
  `nombre_pac` varchar(50) DEFAULT NULL,
  `apellido_pac` varchar(50) DEFAULT NULL,
  `municipio_pac` varchar(50) DEFAULT NULL,
  `direccion_pac` varchar(50) DEFAULT NULL,
  `fecha_nacimiento_pac` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `paciente`
--

INSERT INTO `paciente` (`identificacion_pac`, `tipo_identificacion_pac`, `nombre_pac`, `apellido_pac`, `municipio_pac`, `direccion_pac`, `fecha_nacimiento_pac`) VALUES
(357891, 'TI', 'PEDRO', 'JUARES', 'CACHIPAI', 'CALLE DEL SOL 132', '2000-02-04'),
(58998599, 'CC', 'JUAN', 'CAMELO', 'BOGOTA', 'CALLE FALSA 687', '1990-02-05');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente_cita`
--

CREATE TABLE `paciente_cita` (
  `ingresó` int(11) NOT NULL,
  `cod_paciente` int(11) DEFAULT NULL,
  `cod_cita` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `paciente_cita`
--

INSERT INTO `paciente_cita` (`ingresó`, `cod_paciente`, `cod_cita`) VALUES
(0, 58998599, 1),
(1, 357891, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `telefono_medico`
--

CREATE TABLE `telefono_medico` (
  `cod_medico` int(11) DEFAULT NULL,
  `numero` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `telefono_medico`
--

INSERT INTO `telefono_medico` (`cod_medico`, `numero`) VALUES
(1012415555, 354789798);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `telefono_paciente`
--

CREATE TABLE `telefono_paciente` (
  `cod_paciente` int(11) DEFAULT NULL,
  `numero` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `telefono_paciente`
--

INSERT INTO `telefono_paciente` (`cod_paciente`, `numero`) VALUES
(357891, 87987987),
(58998599, 98798798);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cita`
--
ALTER TABLE `cita`
  ADD PRIMARY KEY (`id_cita`);

--
-- Indices de la tabla `especialidad_medica`
--
ALTER TABLE `especialidad_medica`
  ADD PRIMARY KEY (`id_especialidad`);

--
-- Indices de la tabla `medico`
--
ALTER TABLE `medico`
  ADD PRIMARY KEY (`identificacion_med`),
  ADD KEY `especialidad` (`especialidad`);

--
-- Indices de la tabla `medico_cita`
--
ALTER TABLE `medico_cita`
  ADD KEY `cod_medico` (`cod_medico`),
  ADD KEY `cod_cita` (`cod_cita`);

--
-- Indices de la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`identificacion_pac`);

--
-- Indices de la tabla `paciente_cita`
--
ALTER TABLE `paciente_cita`
  ADD PRIMARY KEY (`ingresó`),
  ADD KEY `cod_cita` (`cod_cita`),
  ADD KEY `cod_paciente` (`cod_paciente`);

--
-- Indices de la tabla `telefono_medico`
--
ALTER TABLE `telefono_medico`
  ADD KEY `cod_medico` (`cod_medico`);

--
-- Indices de la tabla `telefono_paciente`
--
ALTER TABLE `telefono_paciente`
  ADD KEY `cod_paciente` (`cod_paciente`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cita`
--
ALTER TABLE `cita`
  MODIFY `id_cita` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `especialidad_medica`
--
ALTER TABLE `especialidad_medica`
  MODIFY `id_especialidad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `medico`
--
ALTER TABLE `medico`
  ADD CONSTRAINT `medico_ibfk_1` FOREIGN KEY (`especialidad`) REFERENCES `especialidad_medica` (`id_especialidad`);

--
-- Filtros para la tabla `medico_cita`
--
ALTER TABLE `medico_cita`
  ADD CONSTRAINT `medico_cita_ibfk_2` FOREIGN KEY (`cod_medico`) REFERENCES `medico` (`identificacion_med`),
  ADD CONSTRAINT `medico_cita_ibfk_3` FOREIGN KEY (`cod_cita`) REFERENCES `cita` (`id_cita`);

--
-- Filtros para la tabla `paciente_cita`
--
ALTER TABLE `paciente_cita`
  ADD CONSTRAINT `paciente_cita_ibfk_1` FOREIGN KEY (`cod_cita`) REFERENCES `cita` (`id_cita`),
  ADD CONSTRAINT `paciente_cita_ibfk_2` FOREIGN KEY (`cod_paciente`) REFERENCES `paciente` (`identificacion_pac`);

--
-- Filtros para la tabla `telefono_medico`
--
ALTER TABLE `telefono_medico`
  ADD CONSTRAINT `telefono_medico_ibfk_1` FOREIGN KEY (`cod_medico`) REFERENCES `medico` (`identificacion_med`);

--
-- Filtros para la tabla `telefono_paciente`
--
ALTER TABLE `telefono_paciente`
  ADD CONSTRAINT `telefono_paciente_ibfk_1` FOREIGN KEY (`cod_paciente`) REFERENCES `paciente` (`identificacion_pac`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
