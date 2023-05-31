
const{newstore , showstores , deletestore, updatestore}=require('../controllers/store.controller')
const{Router}=require('express')

const storerouter = Router()

storerouter.post('/newstore',newstore)
storerouter.get('/showstores',showstores)
storerouter.delete('/deletestore',deletestore)
storerouter.put('/updatestore',updatestore)

module.exports = storerouter