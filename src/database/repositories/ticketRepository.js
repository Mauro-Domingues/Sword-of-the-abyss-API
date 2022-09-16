const db = require("../index.js")

class TicketRepository {

  async findAll() {
    const conn = await db.connectToMySql()
    const query = "SELECT * FROM ticket"
    const tickets = await conn.query(query)
    return tickets
  }

  async findById(id){
    const conn = await db.connectToMySql()
    const query = "SELECT * FROM ticket WHERE id = ?"
    const [ticket] = await conn.query(query, [id])
    return ticket
  }

  async findByTag(type){
    const conn = await db.connectToMySql()
    const query = "SELECT * FROM ticket WHERE type = ?"
    const [ticket] = await conn.query(query, [type])
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
    const conn = await db.connectToMySql();
    const query = "DELETE FROM ticket WHERE id = ?"
    const ticket = await conn.query(query, [id])
  }

}

module.exports = TicketRepository