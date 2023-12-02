
const { Pool } = require("pg");
const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
};
console.log("Database Config:", config);
// Strip password from config for logging
const { password, ...conf } = config;

const pool = new Pool(config);

pool.connect()
  .then((conn) => {
    const { host, database, user } = conn.connectionParameters;
    console.log("Database Conected:", { host, user, database });
  })
  .catch(err => console.log("database connection failed:", err.message));


module.exports = pool;