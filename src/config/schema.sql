-- Crear base de datos
CREATE DATABASE IF NOT EXISTS crm_restaurante;
USE crm_restaurante;

-- Tabla de usuarios
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin', 'general') NOT NULL DEFAULT 'general'
);

-- Tabla de mesas
CREATE TABLE tables (
  id INT PRIMARY KEY,
  capacity TINYINT NOT NULL
);

ALTER TABLE tables ADD COLUMN num_table INT NOT NULL;

-- Tabla de reservas
CREATE TABLE reservations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  table_id INT NOT NULL,
  reservation_date DATE NOT NULL,
  reservation_time TIME NOT NULL,
  num_guests INT NOT NULL,
  special_request VARCHAR(500),
  status ENUM('pending', 'confirmed', 'cancelled') NOT NULL DEFAULT 'general',
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (table_id) REFERENCES tables(id)
);

-- Tabla del menú
CREATE TABLE menu (
  id INT AUTO_INCREMENT PRIMARY KEY,
  day_of_week ENUM('Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo') NOT NULL UNIQUE,
  name VARCHAR(100) NOT NULL,
  firsts LONGTEXT,
  creation_date TIMESTAMP,
  seconds LONGTEXT,
  desserts LONGTEXT,
  price DECIMAL(10,2)
);

INSERT INTO `` (`id`,`day_of_week`,`name`,`firsts`,`creation_date`,`price`,`seconds`,`desserts`) VALUES (1,'Monday','Menú del Lunes','Empanadas de carne\nEnsalada rusa\nProvoleta\nMatambre arrollado','2025-05-05 17:55:41',50.00,'Milanesa napolitana con papas fritas\nAsado con chimichurri\nCazuela de mondongo\nPasta casera con tuco','Flan con dulce de leche\nPastelitos de membrillo\nBudín de pan');
INSERT INTO `` (`id`,`day_of_week`,`name`,`firsts`,`creation_date`,`price`,`seconds`,`desserts`) VALUES (2,'Tuesday','Menú de Martes','Sopa de calabaza\nEnsalada de mariscos\nEmpanadas de cordero\nEscabeche de ciervo','2025-05-05 17:55:41',45.00,'Cordero patagónico al asador\nTrucha grillada con salsa de limón\nRisotto de hongos\nÑoquis de papa con crema','Alfajores de chocolate\nTorta negra galesa\nPeras al Malbec');
INSERT INTO menu (`id`, `day_of_week`, `name`, `firsts`, `creation_date`, `price`, `seconds`, `desserts`) VALUES
(3, 'Miércoles', 'Menú del Miércoles', 
'Gazpacho andaluz\nEmpanada gallega de atún\nProvoleta con tomate seco\nTortilla de patatas', 
'2025-05-06 00:10:19', 48.00, 
'Entrecot a la parrilla con papas panaderas\nRabas a la madrileña\nPollo al ajillo con puré de batata\nFideos al pesto criollo', 
'Chocotorta\nHelado artesanal de dulce de leche\nArroz con leche');

-- Jueves: platos con más presencia madrileña sin perder el toque argentino
INSERT INTO `menu` (`id`, `day_of_week`, `name`, `firsts`, `creation_date`, `price`, `seconds`, `desserts`) VALUES
(4, 'Jueves', 'Menú del Jueves', 
'Crema de calabaza con crujiente de jamón\nEnsalada de rúcula, queso de cabra y nueces\nEscabeche de berenjenas\nHuevos rotos con chorizo criollo', 
'2025-05-06 10:42:15', 52.00, 
'Canelones de espinaca con salsa bechamel\nMerluza a la vasca\nMatambre a la pizza\nRagú de ternera con papas rusticas', 
'Tarta de Santiago\nBudín de pan con crema\nHelado artesanal');

-- Viernes: opción más especial para fin de semana, con toque festivo
INSERT INTO `menu` (`id`, `day_of_week`, `name`, `firsts`, `creation_date`, `price`, `seconds`, `desserts`) VALUES
(5, 'Viernes', 'Menú del Viernes', 
'Vichyssoise\nTimbal de morcilla con manzana\nCapresse con pesto criollo\nEmpanadas de espinaca y queso', 
'2025-05-06 10:42:15', 56.00, 
'Asado mixto con papas rústicas\nPaella madrileña\nBondiola braseada al Malbec\nÑoquis gratinados', 
'Tarta de queso con frutos rojos\nFlan casero con nata\nPeras al vino tinto');

-- Sábado: más elaborado, ideal para ocasiones especiales o turísticas
INSERT INTO `menu` (`id`, `day_of_week`, `name`, `firsts`, `creation_date`, `price`, `seconds`, `desserts`) VALUES
(6, 'Sábado', 'Menú del Sábado', 
'Carpaccio de ternera con parmesano\nCroquetas caseras de jamón ibérico\nCausa limeña con langostinos\nSopa castellana', 
'2025-05-07 01:07:44', 60.00, 
'Lechazo asado con patatas\nRavioles de cordero con salsa criolla\nBacalao al pil-pil\nOjo de bife con puré trufado', 
'Tarta tatin de manzana\nCoulant de chocolate\nFruta fresca de temporada');
INSERT INTO `` (`id`,`day_of_week`,`name`,`firsts`,`creation_date`,`price`,`seconds`,`desserts`) VALUES (7,'Sunday','Murlock Menú Domingo','Alga crujiente con salsas del pantano 🦑\nHuevas de pez globo fermentadas\nTentáculos de Y\'Shaarj en adobo de coral\nEstofado de insectos de Silithus','2025-05-07 01:07:44',25.50,'Pezfangus a las brasas con escamas caramelizadas 🐟\nCangrejo de aguas profundas al estilo Costa Oscura\nNaga con glaseado de hongos bioluminiscentes\nRana cazadora rellena de especias naga','Gelatina del sueño esmeralda con trozos de coral dulce\nPastel de moluscos marinos con crema de algas\nFrutos del manglar en almíbar de marea');

-- Tabla de reseñas
CREATE TABLE reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  message TEXT NOT NULL,
  rating DECIMAL(3,1) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE reviews
ADD COLUMN gender ENUM('Masculino ', 'Femenino', 'No especificar') NOT NULL;



