const UserRepository = require('../database/repositories/userRepository.js')

class UserService {

  constructor(){
    this.repository = new UserRepository()
  }

  async getAllUsers(){
    return this.repository.findAll()
  }
  
  async createUser(user){
    return this.repository.create(user)
  }

  async deleteUser(id){
    return this.repository.delete(id)
  }

  async checkUser(auth){
    return this.repository.check(auth)
  }

  async checkAdmin(adminAuth){
    return this.repository.checkAdmin(adminAuth)
  }

  async truncateUsers(){
    return this.repository.truncate()
  }

}

module.exports = UserService