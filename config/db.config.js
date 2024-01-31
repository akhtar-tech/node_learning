module.exports = {
  HOST: "localhost",
  USER: "ttn",
  PASSWORD: "123456",
  DB: "ttndb",
  dialect: "postgres",
  pool: {
    max: 1,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};