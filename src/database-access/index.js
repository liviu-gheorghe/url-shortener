const {
    Pool
} = require('pg');


const options = {
    max: 10,
    host: process.env.DB_HOST,
    name: process.env.NAME,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
}

console.info(options);
const pool = new Pool(options);
const databaseQuery = async (query,params) => {
    const {
        rows
    } = await pool.query(query,params);
    return rows;
};

module.exports = {
    databaseQuery
}