const todo = require('../models/todomodel')

module.exports.addtodo=(req,res)=>{
    const {title,description,status }=req.query
   
    todo.create({
        title,
        description,
        status
    }).then(()=>{
    res.json({
        message:"Todo added successfull"
    })
}).catch(err=>{
    console.log(err.message)
})

}


module.exports.gettodo=(req,res)=>{
    todo.find().then(alltodos=>{
        res.json(
             alltodos
        )
    }).catch(err=>{
        res.json({
            message:err.message
        })
    })

}

module.exports.deletetodo=(req,res)=>{
    console.log("delete")
    todo.deleteOne({title:req.query.title}).then(()=>{
        res.json({
            message:"deleted successfully"
        })
    }).catch(err=>{
        res.json({
            message:err.message
        })
    })
}

module.exports.updatetodo=(req,res)=>{
    todo.findOneAndUpdate({title:req.query.title,
        status:req.query.status},
        {status:req.query.status1}).then(()=>{
            res.json({
                message:"updated successfully"
            })
        }).catch(err=>{
            err.message
        })
    }
