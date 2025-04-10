const { Pool } = require('pg');
require('dotenv').config();
const pool = new Pool({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'postgres',
    password: process.env.DB_PASSWORD || 'bekzhan',
    port: process.env.DB_PORT || 5433,
});

pool.connect()
    .then(() => console.log('Подключение к базе данных успешно!'))
    .catch(err => console.error('Ошибка подключения к БД:', err));

module.exports = pool;
