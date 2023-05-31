const{addfood ,showfoods, deletefood, updatehotel}=require('../controllers/food.controller')
const{Router}=require('express')

const foodrouter = Router()

foodrouter.post('/addfood',addfood)
// foodrouter.post('/addhotel',addhotel)
// foodrouter.get('/showhotels',showhotels)
foodrouter.get('/showfoods',showfoods)
// foodrouter.delete('/deletehotel',deletehotel)
foodrouter.delete('/deletefood',deletefood)
foodrouter.put('/updatehotel',updatehotel)

module.exports = foodrouter