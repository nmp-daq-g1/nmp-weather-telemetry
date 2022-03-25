const Pool = require("pg").Pool

const pool = new Pool({
    user: "j_luo",
    password: "",
    host: "localhost",
    port: "5432",
    database: "weather_data"
})

module.exports = pool;