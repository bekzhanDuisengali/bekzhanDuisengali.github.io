const pool = require('./src/db');

async function test() {
    const res = await pool.query('SELECT NOW()');
    console.log('✅ Database time:', res.rows[0].now);
}

test().finally(() => pool.end());