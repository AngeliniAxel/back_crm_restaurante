# 🍽️ CRM Restaurante - Backend

Sistema de gestión para restaurantes enfocado en reservas, menús diarios y experiencia del cliente.

## 🎯 Objetivo

Proveer al restaurante de una plataforma robusta que gestione tanto los menús como las reservas y la interacción con los clientes.

## 🧑‍💻 Roles

- **Cliente**:
  - Registro e inicio de sesión.
  - Consulta del menú diario.
  - Reserva de mesas.
  - Publicación de reseñas.

- **Administrador**:
  - Usuario creado por defecto.
  - Gestión de menús diarios.
  - Configuración del número y tamaño de las mesas.
  - Visualización de reservas y reseñas.

## ✅ Must Have (Backend)

- [x] API para registro y autenticación de clientes.
- [x] Usuario administrador creado por defecto.
- [x] Gestión de menús diarios:
  - [x] Crear, editar y eliminar menús.
  - [x] Asignar menú a un día concreto.
- [x] Gestión de reservas:
  - [x] Establecer mesas disponibles y su tamaño.
  - [x] Crear y cancelar reservas (cliente autenticado).
  - [x] Verificación de disponibilidad antes de permitir reservas.
- [x] Sistema de reseñas post-reserva visibles para el administrador.

## 💡 Should Have (Backend)

- [X] Envío de email al cliente al confirmar la reserva.

## 🛠️ Tecnologías sugeridas

- Node.js / Express
- MySql
- JWT / OAuth para autenticación
- Nodemailer (para el envío de correos)
