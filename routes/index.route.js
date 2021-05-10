const express=require('express');
const User=require ('../models/index.model');
const router=express.Router();
router.get('/',(req,res)=>
{
    User.find({},(err,users)=>
    {res.json(users)})
})

router.post('/',(req,res)=>
{

user=new User({
    name:req.body.name,
    email:req.body.name,
    password:req.body.name
})
user.save(()=>
    {res.json(user)
    })
})


router.put ('/:id',async(req,res)
=>
{
    user=await User.findById(req.params.id)
    user.name=req.body.name;
    user.eamil=req.body.eamil;
    user.save(()=>
    {res.json(user)})
})
    

router.delete('/:id',(req,res)=>
{User.findById(req.paramas.id,(err)=>
    {res.json ({'message':'deleted'})
}
    )}
)
module.exports=router