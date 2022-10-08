const UserService = require("../services/userService")

exports.get = async (req, res, next) => {
  try{
    const payload = await new UserService().getAllUsers()
    res.status(200).send(payload)
  }catch(error){
    res.status(400).send({
      message: error.message
    })
  }
}

exports.post = async (req, res, next) => {
  try{
    const payload = await new UserService().createUser(req.body)
    res.status(201).send(payload)
  }catch(error){
    res.status(400).send({
      message: error.message
    })
  }
}

exports.delete = async (req, res, next) => {
  try{
    const payload = await new UserService().deleteUser(req.params.id)
    res.status(204).send(payload)
  }catch(error){
    res.status(404).send({
      message: error.message
    })
  }
}

exports.checkUser = async (req, res, next) => {
  try{
    const payload = await new UserService().checkUser(req.body)
    res.status(200).send(payload)
  }catch(error){
    res.status(401).send({
      message: error.message
    })
  }
}

exports.checkAdmin = async (req, res, next) => {
  try{
    const payload = await new UserService().checkAdmin(req.body)
    res.status(200).send(payload)
  }catch(error){
    res.status(401).send({
      message: error.message
    })
  }
}

exports.truncate = async (req, res, next) => {
  try{
    const payload = await new UserService().truncateUsers()
    res.status(204).send(payload)
  }catch(error){
    res.status(404).send({
      message: error.message
    })
  }
}