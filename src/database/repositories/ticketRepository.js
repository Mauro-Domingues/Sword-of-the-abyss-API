const db = require("../index.js")

class TicketRepository {

  async findAll() {
    const conn = await db.connectToMySql()
    const query = "SELECT * FROM ticket"
    const [ticket] = await conn.query(query)
    return ticket
  }

  async findById(id){
    const conn = await db.connectToMySql()
    const query = "SELECT * FROM ticket WHERE id = ?"
    const [ticket] = await conn.query(query, [id])
    return ticket
  }

  async findByStatus(status){
    const conn = await db.connectToMySql()
    const query = "SELECT * FROM ticket WHERE status = ?"
    const [ticket] = await conn.query(query, [status])
    return ticket
  }

  async findByTag(type){
    const conn = await db.connectToMySql()
    const query = "SELECT * FROM ticket WHERE type = ?"
    const [ticket] = await conn.query(query, [type])
    return ticket
  }

  async create(ticketData){
    const conn = await db.connectToMySql()
    const query = "INSERT INTO ticket (title, data, type, description, contact) VALUES (?, ?, ?, ?, ?)"
    const ticket = await conn.query(query, [
      ticketData.title,
      ticketData.data,
      ticketData.type,
      ticketData.description,
      ticketData.contact
    ])
    return ticket
  }

  async update(id, ticketData){
    const conn = await db.connectToMySql()
    const query = "UPDATE ticket SET status = ? WHERE id = ?"
    const ticket = await conn.query(query, [
      ticketData.status,
      id
    ])
    return ticket
  }

  async delete(id){
    const conn = await db.connectToMySql()
    const query = "DELETE FROM ticket WHERE id = ?"
    const ticket = await conn.query(query, [id])
  }

  async truncate(){
    const conn = await db.connectToMySql()
    const query = "TRUNCATE ticket"
    const ticket = await conn.query(query)
  }

}

module.exports = TicketRepository