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

-- Tabla de reservas
CREATE TABLE reservations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  table_id INT NOT NULL,
  reservation_date DATE NOT NULL,
  reservation_time TIME NOT NULL,
  num_guests INT NOT NULL,
  special_request VARCHAR(500),
  status ENUM('pending', 'confirmed', 'cancelled') NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (table_id) REFERENCES tables(id)
);

-- Tabla del menú
CREATE TABLE menu (
  id INT AUTO_INCREMENT PRIMARY KEY,
  day_of_week ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday') NOT NULL UNIQUE,
  name VARCHAR(100) NOT NULL,
  firsts LONGTEXT,
  seconds LONGTEXT,
  desserts LONGTEXT,
  price DECIMAL(10,2)
);

-- Tabla de reseñas
CREATE TABLE reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  message TEXT NOT NULL,
  rating DECIMAL(3,1) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);