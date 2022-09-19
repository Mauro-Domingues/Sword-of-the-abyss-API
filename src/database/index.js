const mysql = require("mysql2/promise")

const connectToMySql = async () => {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection
    const config = {
        host: "localhost",
        user: "root",
        password: "RI1097032085co",
        database: "report_suggestion_db"
    }
    const connection = await mysql.createConnection(config)
    global.connection = connection
}

connectToMySql()
module.exports = {connectToMySql}