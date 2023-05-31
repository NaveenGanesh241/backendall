const hotel=require('../models/menu')

module.exports.addmenu=(req,res)=>{
    const {fooditem,price,available,chefname}=req.query
   
    hotel.create({
        fooditem,
        price,
        available,
        chefname
    }).then(()=>{
    res.json({
        message:"signup successfull"
    }).catch(err=>{
        res.json({
            message:err.message
        })
})
})
}

module.exports.showmenu=(req,res)=>{
    hotel.find().then(allitem=>{
        res.json({
            data:allitem})
        }).catch(err=>{
            res.json({
                message:err.message
            })
    })
}

module.exports.deletemenu=(req,res)=>{
    hotel.deleteOne({fooditem:req.query.item}).then(del=>{
        res.json({
            message:"Deleted successfully"
        })
    }).catch(err=>{
        message:err.message
    })
}


module.exports.updatemenu=(req,res)=>{
    hotel.findOneAndUpdate({fooditem:req.query.fooditem},{fooditem:req.query.fooditem1}).then(upd=>{        
        res.json({
            message:"updated successfully"
        }).catch(err=>{
        console.log(err.message)
    })
    
    })
}
