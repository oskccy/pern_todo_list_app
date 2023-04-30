const pg = require('pg');
const Pool = pg.Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    port: 5432,
    database: "pern_todo_database"
});

module.exports = pool; // built in js to use 'pool' in other files
