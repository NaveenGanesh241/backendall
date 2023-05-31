const food = require('../models/foodmodel')

module.exports.addfood=(req,res)=>{
    const {fooditem,price,hotelname }=req.query
   
    food.create({
        fooditem,
        price,
        hotelname
    }).then(()=>{
    res.json({
        message:"added successfully"
    })
}).catch(err=>{
    console.log(err.message)
})
}

module.exports.showfoods=(req,res)=>{
    food.find().then(allitem=>{
        res.json({
            data:allitem})
        }).catch(err=>{
            res.json({
                message:err.message
            })
    })
}

module.exports.deletefood=(req,res)=>{
    hotel.deleteOne({fooditem:req.query.item}).then(msg=>{
        res.json({
            msg:"Deleted successfully"
        })
    }).catch(err=>{
        err.message
    })
}


module.exports.updatehotel=(req,res)=>{
    food.findOneAndUpdate({fooditem:req.query.fooditem},{fooditem:req.query.fooditem1}).then(upd=>{        
        res.json({
            message:"updated successfully"
        }).catch(err=>{
        console.log(err.message)
    })
    
    })
}