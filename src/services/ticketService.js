const TicketRepository = require('../database/repositories/ticketRepository.js')

class TicketService {

  constructor() {
    this.repository = new TicketRepository()
  }

  async getAllTickets(){
    return this.repository.findAll()
  }

  async getTicketById(id){
    return this.repository.findById(id)
  }

  async getTicketByTag(type){
    return this.repository.findByTag(type)
  }

  async updateTicket(id, ticket){
    return this.repository.update(id, ticket)
  }

  async deleteTicket(id){
    return this.repository.delete(id)
  }

}

module.exports = TicketService