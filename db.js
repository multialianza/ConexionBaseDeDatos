/**
 * ==========================================
 * Conexión a PostgreSQL usando Node.js
 * Librería: pg
 * Autor: Iván Salazar
 * ==========================================
 */

require('dotenv').config(); // Cargar variables de entorno
const { Pool } = require('pg'); // Importar Pool de pg

/**
 * CONFIGURACIÓN DEL POOL
 * Aquí usamos variables de entorno por seguridad.
 * Nunca colocar credenciales directamente en el código.
 */
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

/**
 * FUNCIÓN ASÍNCRONA PARA VERIFICAR CONEXIÓN
 */
async function verificarConexion() {
  let client;

  try {
    // Intentar obtener cliente del pool
    client = await pool.connect();

    console.log("✅ Conexión exitosa a PostgreSQL 🚀");

    // Consulta simple de prueba
    const result = await client.query("SELECT NOW()");
    console.log("🕒 Hora servidor:", result.rows[0]);

  } catch (err) {
    console.error("❌ Error al conectar a PostgreSQL:");
    console.error(err.message);
  } finally {
    // Liberar cliente SIEMPRE
    if (client) client.release();
  }
}

/**
 * Ejecutar función
 */
verificarConexion();