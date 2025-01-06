// Pool ek connection manager hai jo database ke saath efficient aur fast interactions ke liye multiple connections ko handle karta hai.
const { Pool } = require('pg');
require('dotenv').config()

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

module.exports = pool;