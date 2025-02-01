require("dotenv").config();
const { Sequelize } = require("sequelize");
const reservaModel = require("./Models/reservaModel");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

// const { DATABASE_URL } = process.env;

// const sequelize = new Sequelize(DATABASE_URL, {
//   logging: false,
//   native: false,
// });

// Carga de modelos
const Reserva = reservaModel(sequelize);

// Función para probar la conexión
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida con éxito.');

    // const results = await sequelize.query('SELECT * FROM Reserva');
    // console.log('Resultados:', results);
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
};

// Función para sincronizar modelos
const syncModels = async () => {
  try {
    await sequelize.sync({ alter: true }); // Cambia a { force: true } si es necesario
    console.log("Modelos sincronizados con éxito.");
  } catch (error) {
    console.error("Error durante la sincronización:", error);
  }
};

// Ejecutar pruebas y sincronización
const run = async () => {
  await testConnection();
  await syncModels();
};

run();

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
