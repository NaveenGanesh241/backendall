
const{signup , getuser, deleteuser, updateuser}=require('../controllers/user.controllers')
const{Router}=require('express')

const router = Router()

router.post('/signup',signup)
router.get('/getuser',getuser)
router.delete('/deleteuser',deleteuser)
router.put('/updateuser',updateuser)

module.exports=router