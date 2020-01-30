-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-01-2020 a las 22:20:03
-- Versión del servidor: 10.3.16-MariaDB
-- Versión de PHP: 7.3.6

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
  `fecha_cita` date DEFAULT NULL,
  `hora_cita` time DEFAULT NULL,
  `lugar_cita` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cita`
--

INSERT INTO `cita` (`id_cita`, `fecha_cita`, `hora_cita`, `lugar_cita`) VALUES
(2, '1999-03-11', '06:00:00', 'ANTIOQUIA'),
(3, '2014-12-24', '07:00:00', 'ATLANTICO'),
(4, '1998-01-01', '08:00:00', 'BOGOTA'),
(5, '1998-03-17', '09:00:00', 'BOLIVAR'),
(6, '1991-07-25', '10:00:00', 'BOYACA'),
(7, '1996-03-19', '11:00:00', 'CALDAS'),
(8, '2013-08-07', '12:00:00', 'CAQUETA'),
(9, '1993-09-18', '13:00:00', 'CAUCA'),
(10, '2016-11-07', '14:00:00', 'CESAR'),
(11, '2011-02-08', '15:00:00', 'CORDOBA'),
(12, '2009-08-20', '16:00:00', 'CUNDINAMARCA'),
(13, '2017-05-25', '05:00:00', 'CHOCO'),
(14, '2016-01-02', '06:00:00', 'HUILA'),
(15, '1990-04-11', '07:00:00', 'LA GUAJIRA'),
(16, '2012-01-26', '08:00:00', 'MAGDALENA'),
(17, '2007-12-21', '09:00:00', 'META'),
(18, '1992-08-01', '05:00:00', 'NARI?O'),
(19, '2009-07-17', '06:00:00', 'HUILA'),
(20, '1996-07-09', '07:00:00', 'LA GUAJIRA'),
(21, '1998-02-06', '08:00:00', 'MAGDALENA'),
(22, '2010-07-21', '09:00:00', 'HUILA'),
(23, '1992-04-02', '12:00:00', 'LA GUAJIRA'),
(24, '2017-11-04', '13:00:00', 'MAGDALENA'),
(25, '2015-06-05', '14:00:00', 'META'),
(26, '2019-03-11', '07:00:00', 'BOGOTA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especialidad`
--

CREATE TABLE `especialidad` (
  `id_especialidad` int(11) NOT NULL,
  `nombre esp` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `especialidad`
--

INSERT INTO `especialidad` (`id_especialidad`, `nombre esp`) VALUES
(1, 'cardiologia'),
(2, 'urologia\r'),
(3, 'neurologia\r'),
(4, 'psicologia\r'),
(5, 'dermatologia\r'),
(6, 'ginecologia\r'),
(7, 'oftalmologia\r'),
(8, 'oncologia\r'),
(9, 'pediatria\r'),
(10, 'reumatologia\r');

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
  `especialidad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `medico`
--

INSERT INTO `medico` (`identificacion_med`, `tipo_identificacion_med`, `nombre_med`, `apellido_med`, `municipio_med`, `dirección_med`, `especialidad`) VALUES
(12312, 'CC', 'CAMILO', 'SANCHES', 'BOGOTA', 'CALLE 1235', 10),
(7169924, 'CC', 'Luis Alejandro', 'Pereira Esguerra', 'Bogota', 'CALLE FALSA 123', 1),
(10080790, 'CC', 'Arnando', 'Ramirez Ospina', 'Bogota', 'CALLE FALSA 4545', 2),
(10820934, 'CC', 'Hernando Che', 'Tuiran Tejada', 'Bogota', 'CALLE FALSA 4545', 1),
(12283356, 'CC', 'Javier Orlando', 'Cumbe Angel', 'Bogota', 'CALLE ZARAGOZA NO 1010', 2),
(12345678, 'CC', 'pruebas', 'masivo', 'CUNDINAMARCA', 'CALLE FALSA 123', 3),
(14223435, 'CC', 'Hipolito', 'Guzman Cuellar ', 'Bogota', 'AV 20 DE NOVIEMBRE NO 1060', 1),
(17329743, 'CC', 'Orduvay', 'Esquivel Gonzales', 'Bogota', 'BLVD BENITO JUAREZ NO 1466-A', 5),
(26007743, 'CC', 'Zully Maria', 'Caraballo Alvarez', 'Bogota', 'CALLE ZARAGOZA NO 1010', 3),
(35788945, 'CE', 'pero nuevo', 'sanches', 'BOGOTA', 'CALLE 357 n4568', 3),
(35789456, 'CE', 'MEDICO ', 'MANUAL', 'BOGOTA', 'CALLE FALSA 4545', 4),
(35789789, 'CE', 'MEDICO ', 'MANUAL', 'BOGOTA', 'CALLE FALSA 4545', 8),
(37326973, 'CC', 'Ana Maria', 'Gandur Portillo', 'Bogota', 'CALLE ZARAGOZA NO 1010', 8),
(1029846872, 'CE', 'MANUEL', 'GONZALEZ', ' Cordoba', 'CALLE ZARAGOZA NO 1010', 8),
(1071166297, 'CC', 'Luis Noriel', 'Cubillos Leon', 'Bogota', 'AV 20 DE NOVIEMBRE NO 1060', 5),
(1092416185, 'CC', 'JUAN', 'SANCHEZ', ' Choco', 'AV 20 DE NOVIEMBRE NO 1060', 5),
(1121329019, 'CC', 'Karen Margarita', 'Chinchia Vega', 'Bogota', 'BLVD BENITO JUAREZ NO 1466-A', 5),
(1214983450, 'CE', 'JOSEFA', 'LOPEZ', ' Santander', 'BLVD BENITO JUAREZ NO 1466-A', 4),
(1610509217, 'CE', 'MARIA CARMEN', 'MARTINEZ', ' San Andres y Providencia', 'AV 20 DE NOVIEMBRE NO 1053', 4),
(2147483647, 'CC', 'LUIS', 'JIMENEZ', 'BOGOTA', 'AV INDEPENDENCIA NO 985-A', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medico_cita`
--

CREATE TABLE `medico_cita` (
  `ESPECIALIDAD` int(11) NOT NULL,
  `cod_medico` int(11) DEFAULT NULL,
  `cod_cita` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `medico_cita`
--

INSERT INTO `medico_cita` (`ESPECIALIDAD`, `cod_medico`, `cod_cita`) VALUES
(0, NULL, NULL),
(0, 12345678, 9),
(0, 35789456, 6);

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `paciente`
--

INSERT INTO `paciente` (`identificacion_pac`, `tipo_identificacion_pac`, `nombre_pac`, `apellido_pac`, `municipio_pac`, `direccion_pac`, `fecha_nacimiento_pac`) VALUES
(12354654, 'CC', 'prueba', 'pruea', 'soahca', 'calle falsa 12312', '2019-12-03'),
(51730276, 'CC', 'Alison', 'Sanchez', 'Bogota ', 'transversal 45#35-67', '1997-06-05'),
(53147852, 'CC', 'John', 'Martinez', 'Bogota ', 'carrera 24 # 56f-76', '1997-06-05'),
(79974098, 'TI', 'Wilson ', 'Villamil', 'Bogota ', 'carrera 76#25-46 sur', '1987-05-06'),
(1000018014, 'CC', 'Angie', 'Leon', 'Bogota ', 'calle 67# 45c -65', '1987-05-06'),
(1012415144, 'CE', 'ASDASD', 'ASDASD', 'CUNDINAMCAR', 'CALLE FALSA 123', '1994-11-11'),
(1012415155, 'CC', 'diego', 'PUREBA', 'SOACHA', 'CUNDINAMARCA', '2019-11-04'),
(1012443672, 'CC', 'Eliana', 'Gutierrez', 'Bogota ', 'calle 95#16-28', '1982-12-09'),
(1201512444, 'Reg', 'testst', 'teste', 'soacha', 'mi caa', '2017-01-02'),
(2147483647, 'CE', 'Melanie', 'Ceron', 'Soacha ', 'carrera 6 # 11b -54', '1982-12-09');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente_cita`
--

CREATE TABLE `paciente_cita` (
  `ingresó` int(11) DEFAULT NULL,
  `cod_paciente` int(11) DEFAULT NULL,
  `cod_cita` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `paciente_cita`
--

INSERT INTO `paciente_cita` (`ingresó`, `cod_paciente`, `cod_cita`) VALUES
(NULL, NULL, NULL),
(1, 51730276, 2),
(2, 53147852, 3),
(3, 1000018014, 4),
(4, 1012443672, 4),
(5, 2147483647, 5),
(6, 79974098, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `telefono_medico`
--

CREATE TABLE `telefono_medico` (
  `cod_medico` int(11) DEFAULT NULL,
  `numero` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `telefono_medico`
--

INSERT INTO `telefono_medico` (`cod_medico`, `numero`) VALUES
(7169924, 2147483647),
(10080790, 2147483647),
(10820934, 2147483647),
(12283356, 2147483647),
(14223435, 2147483647),
(17329743, 2147483647),
(26007743, 2147483647),
(37326973, 2147483647),
(1071166297, 2147483647),
(1121329019, 2147483647);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `telefono_paciente`
--

CREATE TABLE `telefono_paciente` (
  `cod_paciente` int(11) DEFAULT NULL,
  `numero` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `telefono_paciente`
--

INSERT INTO `telefono_paciente` (`cod_paciente`, `numero`) VALUES
(1012443672, 2147483647),
(79974098, 2147483647),
(51730276, 2147483647),
(2147483647, 2147483647),
(1000018014, 2147483647),
(53147852, 2147483647),
(51730276, 354789798);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_usuario`
--

CREATE TABLE `tipo_usuario` (
  `id_tipo` int(11) NOT NULL,
  `nombre_tipo` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usu` int(11) NOT NULL,
  `user_usu` varchar(50) DEFAULT NULL,
  `password_usu` varchar(50) DEFAULT NULL,
  `cod_tipo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cita`
--
ALTER TABLE `cita`
  ADD PRIMARY KEY (`id_cita`);

--
-- Indices de la tabla `especialidad`
--
ALTER TABLE `especialidad`
  ADD PRIMARY KEY (`id_especialidad`);

--
-- Indices de la tabla `medico`
--
ALTER TABLE `medico`
  ADD PRIMARY KEY (`identificacion_med`),
  ADD KEY `fk_idEspecialidad` (`especialidad`);

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
  ADD KEY `cod_paciente` (`cod_paciente`),
  ADD KEY `cod_cita` (`cod_cita`);

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
-- Indices de la tabla `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  ADD PRIMARY KEY (`id_tipo`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usu`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `especialidad`
--
ALTER TABLE `especialidad`
  MODIFY `id_especialidad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `medico`
--
ALTER TABLE `medico`
  ADD CONSTRAINT `fk_idEspecialidad` FOREIGN KEY (`especialidad`) REFERENCES `especialidad` (`id_especialidad`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `medico_cita`
--
ALTER TABLE `medico_cita`
  ADD CONSTRAINT `medico_cita_ibfk_1` FOREIGN KEY (`cod_medico`) REFERENCES `medico` (`identificacion_med`),
  ADD CONSTRAINT `medico_cita_ibfk_2` FOREIGN KEY (`cod_cita`) REFERENCES `cita` (`id_cita`);

--
-- Filtros para la tabla `paciente_cita`
--
ALTER TABLE `paciente_cita`
  ADD CONSTRAINT `paciente_cita_ibfk_1` FOREIGN KEY (`cod_paciente`) REFERENCES `paciente` (`identificacion_pac`),
  ADD CONSTRAINT `paciente_cita_ibfk_2` FOREIGN KEY (`cod_cita`) REFERENCES `cita` (`id_cita`);

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
