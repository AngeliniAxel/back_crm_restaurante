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
INSERT INTO `` (`id`,`day_of_week`,`name`,`firsts`,`creation_date`,`price`,`seconds`,`desserts`) VALUES (3,'Wednesday','Menú Miércoles','Ensalada Cesar\nSopa de Pollo','2025-05-06 00:10:19',30.00,'Bistec\n','Tiramisu');
INSERT INTO `` (`id`,`day_of_week`,`name`,`firsts`,`creation_date`,`price`,`seconds`,`desserts`) VALUES (4,'Thursday','Menú del Jueves','Crema de calabaza','2025-05-06 10:42:15',55.00,'Pasta boloñesa\nFilete','Helado');
INSERT INTO `` (`id`,`day_of_week`,`name`,`firsts`,`creation_date`,`price`,`seconds`,`desserts`) VALUES (5,'Friday','Menú del Viernes','dsgfsdf','2025-05-06 10:42:15',15.00,'fghfd','sadfas');
INSERT INTO `` (`id`,`day_of_week`,`name`,`firsts`,`creation_date`,`price`,`seconds`,`desserts`) VALUES (6,'Saturday','Menú del Sábado','sdfsd','2025-05-07 01:07:44',25.00,'dfhgfgh','Fruta en almibar\nHelado\n');
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

