const TicketRepository = require('../database/repositories/ticketRepository.js')

class TicketService {

  constructor(){
    this.repository = new TicketRepository()
  }

  async getAllTickets(){
    return this.repository.findAll()
  }

  async getTicketById(id){
    return this.repository.findById(id)
  }

  async getTicketByStatus(status){
    return this.repository.findByStatus(status)
  }

  async getTicketByTag(type){
    return this.repository.findByTag(type)
  }

  async createTicket(ticket){
    return this.repository.create(ticket)
  }

  async updateTicket(id, status){
    return this.repository.update(id, status)
  }

  async deleteTicket(id){
    return this.repository.delete(id)
  }

}

module.exports = TicketService