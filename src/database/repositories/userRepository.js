const db = require("../index.js")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

class UserRepository {

  async findAll() {
    const conn = await db.connectToMySql()
    const query = "SELECT * FROM users"
    const [user] = await conn.query(query)
    return user
  }

  async create(userData) {
    const conn = await db.connectToMySql()
    const query = "INSERT INTO users (name, password) VALUES (?, ?)"
    bcrypt.hash(userData.password, 10, async (err, res) => {
      const user = await conn.query(query, [userData.name, res])
      return user
    })
  }

  async delete(id){
    const conn = await db.connectToMySql()
    const query = "DELETE FROM users WHERE id = ?"
    const user = await conn.query(query, [id])
  }

  async check(userData) {
    const conn = await db.connectToMySql()
    const query = "SELECT * FROM users"
    const [users] = await conn.query(query)
    let auth = ["Falha na autenticação"]
    for (let i = 0; i < users.length; i++) {
      if (userData.name === users[i].name) {
        let password = await bcrypt.compare(userData.password, users[i].password)
        if (password) {
          auth = [
            jwt.sign({
              user: users[i].name,
              password: users[i].password
            }, process.env.SECRET, {
              expiresIn: "1h"
            })
          ]
        }
      }
    }
    return auth
  }

  async checkAdmin(userData) {
    const conn = await db.connectToMySql()
    const query = "SELECT * FROM users"
    const [users] = await conn.query(query)
    let adminAuth = ["Falha na autenticação"]
    if (userData.name, users[0].name) {
      let password = await bcrypt.compare(userData.password, users[0].password)
      if (password) {
        adminAuth = [
          jwt.sign({
            user: users[0].name,
            password: users[0].password
          }, process.env.ADMIN_SECRET, {
            expiresIn: "1h"
          })
        ]
      }
    }
    return adminAuth
  }

}

module.exports = UserRepository
