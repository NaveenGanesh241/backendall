const{addtodo, gettodo, deletetodo , updatetodo} = require('../controllers/todo.controller')
const{Router}=require('express')

const todorouter = Router()

todorouter.post('/addtodo',addtodo)
todorouter.get('/gettodo',gettodo)
todorouter.delete('/deletetodo',deletetodo)
todorouter.put('/updatetodo',updatetodo)

module.exports = todorouter