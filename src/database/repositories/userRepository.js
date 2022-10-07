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
    const query = "INSERT INTO users (email, password) VALUES (?, ?)"
    bcrypt.hash(userData.email, 10, async (err, res) => {
      const email = res
      bcrypt.hash(userData.password, 10, async (err, res) => {
        const user = await conn.query(query, [email, res])
        return user
      })
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
      let email = await bcrypt.compare(userData.email, users[i].email)
      if (email) {
        let password = await bcrypt.compare(userData.password, users[i].password)
        if (password) {
          auth = [
            jwt.sign({
              user: users[i].email,
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
    let email = await bcrypt.compare(userData.email, users[0].email)
    if (email) {
      let password = await bcrypt.compare(userData.password, users[0].password)
      if (password) {
        adminAuth = [
          jwt.sign({
            user: users[0].email,
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
