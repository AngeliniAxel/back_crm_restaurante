const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "admin231917",
  port: 3306,
  database: "crm_restaurante",
});

module.exports = pool.promise();
