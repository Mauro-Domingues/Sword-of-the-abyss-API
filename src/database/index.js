const mysql = require("mysql2/promise")

const connectToMySql = async () => {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection
    const config = {
        host: "sql.freedb.tech",
        user: "freedb_sota_admin",
        password: "Dv?YDGG8sg8a%vR",
        database: "freedb_report_suggestion_db"
    }
    const connection = await mysql.createConnection(config)
    global.connection = connection
}

connectToMySql()
module.exports = {connectToMySql}