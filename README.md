# ConexionBaseDeDatos
🛠️ E1-M7 Ejercicio
Configuración de la Conexión a la Base de Datos 🐘
Objetivo: Aprender el proceso fundamental para conectar una aplicación Node.js a una base de datos PostgreSQL. Utilizarás el paquete pg, la librería estándar para esta tarea, y configurarás un "pool" de conexiones, que es la práctica recomendada para gestionar las conexiones de manera eficiente y robusta.

Prerrequisitos: Para completar este ejercicio, necesitas tener acceso a una base de datos PostgreSQL. Puede ser una instancia local en tu computadora (usando Docker, por ejemplo) o una base de datos remota. Debes tener a mano los siguientes datos de conexión:

Usuario (user)

Host (host)

Nombre de la base de datos (database)

Contraseña (password)

Puerto (port, por defecto es 5432)

Instrucciones:

Paso 1: Instalación del Paquete
Abre la terminal en la carpeta de tu proyecto.

Instala el paquete pg a través de NPM:

npm install pg

 
Paso 2: Creación del Script de Conexión
Crea un nuevo archivo en tu proyecto. Un buen nombre sería db-connect.js o simplemente db.js.

Dentro de este archivo, importa la clase Pool desde la librería pg:

const { Pool } = require('pg');

 
Paso 3: Configuración del Pool de Conexiones
Un "pool" gestiona un conjunto de conexiones abiertas a la base de datos, permitiendo que tu aplicación las reutilice en lugar de abrir y cerrar una nueva conexión para cada consulta.

Crea un objeto de configuración con tus credenciales de la base de datos.

Crea una nueva instancia de Pool, pasándole tu objeto de configuración.

Paso 4: Verificación de la Conexión con Async/Await
Para confirmar que tu configuración es correcta, intentarás obtener un "cliente" del pool.

Crea una función asíncrona (ej: verificarConexion).

Dentro de esta función, utiliza un bloque try...catch para manejar el resultado de la conexión.

Bloque try: Usa await pool.connect() para intentar establecer una conexión. Si la promesa se resuelve, significa que la conexión fue exitosa. Imprime un mensaje de éxito en la consola.

Bloque catch: Si la promesa es rechazada (por credenciales incorrectas, base de datos no disponible, etc.), el error será capturado. Imprime un mensaje de error claro en la consola junto con el objeto de error (err).

Importante: La llamada a pool.connect() reserva un cliente del pool. En una aplicación real, siempre debes liberarlo con client.release() cuando termines de usarlo. Para esta simple prueba, nos enfocaremos solo en el éxito o fracaso de la conexión inicial.

Llama a tu función asíncrona para que se ejecute.

Paso 5: Ejecución del Script
Guarda tu archivo db-connect.js.

Ejecútalo desde la terminal:

node db-connect.js
 
Observa el resultado en la consola. Deberías ver tu mensaje de "Conexión exitosa" o un mensaje de error detallado que te ayudará a depurar cualquier problema con tu configuración.

Conceptos a Aplicar:

Node-Postgres (pg): La librería o "driver" estándar para interactuar con bases de datos PostgreSQL desde Node.js.

Pool de Conexiones (Pool): La práctica recomendada para gestionar conexiones a la base de datos de forma eficiente, evitando la sobrecarga de crear y destruir conexiones constantemente.

Programación Asíncrona: El uso de async/await para manejar operaciones que toman tiempo, como establecer una conexión de red con una base de datos.

Manejo de Errores: El uso indispensable del bloque try...catch para capturar y gestionar fallos de conexión de manera controlada, evitando que la aplicación se detenga abruptamente.

Entrega:

El trabajo deberá ser entregado a través de un repositorio público en GitHub. ¡MUY IMPORTANTE! No subas tus credenciales (usuario, contraseña) directamente en el código. Utiliza variables de entorno o, para este ejercicio, al menos menciona en un comentario que las credenciales deben ser reemplazadas. Comparte únicamente el enlace a dicho repositorio. 📤
