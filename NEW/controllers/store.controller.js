const store = require('../models/storemodel')

module.exports.newstore=(req,res)=>{
    const {storename,location,type,ownby }=req.query
   
    store.create({
        storename,
        location,
        type,
        ownby
    }).then(()=>{
    res.json({
        message:"signup successfull"
    })
}).catch(err=>{
    console.log(err.message)
})

}


module.exports.showstores=(req,res)=>{
    store.find().then(allUsers=>{
        res.json({
            data:allUsers
        })
    }).catch(err=>{
        res.json({
            message:err.message
        })
    })

}

module.exports.deletestore=(req,res)=>{
    store.deleteOne({storename:req.query.storename}).then(()=>{
        res.json({
            message:"deleted successfully"
        })
    }).catch(err=>{
        res.json({
            message:err.message
        })
    })
}

module.exports.updatestore=(req,res)=>{
    store.findOneAndUpdate({storename:req.query.storename},{storename:req.query.storename1}).then(()=>{
            res.json({
                message:"updated successfully"
            })
        }).catch(err=>{
            console.log(err.message)
        })
    }
