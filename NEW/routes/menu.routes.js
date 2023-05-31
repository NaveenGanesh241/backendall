const{addmenu, showmenu, deletemenu , updatemenu}=require('../controllers/menu.controller')
const{Router}=require('express')

const menurouter = Router()

menurouter.post('/addmenu',addmenu)
menurouter.get('/showmenu',showmenu)
menurouter.delete('/deletemenu',deletemenu)
menurouter.put('/updatemenu',updatemenu)

module.exports = menurouter