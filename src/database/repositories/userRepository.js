const db = require("../index.js")

class UserRepository {

  async findAll() {
    const conn = await db.connectToMySql()
    const query = "SELECT * FROM users"
    const [user] = await conn.query(query)
    return user
  }

  /*async create(userData){
    const conn = await db.connectToMySql()
    const query = "INSERT INTO users (email, password) VALUES (?, ?)"
    const user = await conn.query(query, [
      userData.email,
      userData.password
    ])
    return user
  }*/

  async create(userData) {
    const conn = await db.connectToMySql()
    const query = "INSERT INTO users (email, password) VALUES (?, ?)"
    const email = bcrypt.hash(userData.email, 10)
    const password = bcrypt.hash(userData.password, 10)
    const user = await conn.query(query, [email, password])
    return user
  }

  async delete(id){
    const conn = await db.connectToMySql()
    const query = "DELETE FROM users WHERE id = ?"
    const user = await conn.query(query, [id])
  }

  async check(userData) {
    const conn = await db.connectToMySql()
    const query = "SELECT * FROM user"
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
    const query = "SELECT * FROM user"
    const [users] = await conn.query(query)
    let auth = ["Falha na autenticação"]
    let email = await bcrypt.compare(userData.email, users[0].email)
    if (email) {
      let password = await bcrypt.compare(userData.password, users[0].password)
      if (password) {
        auth = [
          jwt.sign({
            user: users[i].email,
            password: users[i].password
          }, process.env.ADMIN_SECRET, {
            expiresIn: "1h"
          })
        ]
      }
    }
    return auth
  }

}

module.exports = UserRepository
