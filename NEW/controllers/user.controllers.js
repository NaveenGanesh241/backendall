const employ=require('../models/user')

module.exports.signup=(req,res)=>{
    const {username:empname, password}=req.query
   
    employ.create({
        empname,
        password
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
module.exports.getuser=(req,res)=>{
    employ.find().then(allUsers=>{
        res.json({
            data:allUsers
        })
    }).catch(err=>{
        res.json({
            message:err.message
        })
    })

}

module.exports.deleteuser=(req,res)=>{
    employ.deleteOne({empname:req.body.empname}).then(del=>{
        res.json({
            message:"deleted successfully"
        })
    }).catch(err=>{
        res.json({
            message:err.message
        })
    })
}

module.exports.updateuser=(req,res)=>{
    employ.findOneAndUpdate({empname:req.query.username},{empname:req.query.username}).then(newemp=>{
            console.log("updated successfully")
        }).catch(err=>{
            console.log(err.message)
        })
    res.json({
        message:"updated successfully"
    })
}
