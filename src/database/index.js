const mysql = require("mysql2/promise")
require('dotenv').config()

const connectToMySql = async () => {
    if (global.connection && global.connection.state !== 'disconnected'){
        return global.connection
    }
    const config = {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    }
    const connection = await mysql.createConnection(config)
    global.connection = connection
}

connectToMySql()
module.exports = {connectToMySql}