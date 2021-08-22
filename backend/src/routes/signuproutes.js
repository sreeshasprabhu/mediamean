const express=require('express');
const signupRouter =express.Router();

const Registerdata =require('../model/Registerdata')

signupRouter.post('/', async function(req,res){
    console.log(req.body);
      Registerdata.findOne({email:req.body.user.email},function(error,user){
        if(user==null){
            res.status(200).send();
                    const item= new Registerdata({
        
                        name:req.body.user.name,     
                        email:req.body.user.email,
                        password:req.body.user.password
                        
                });
                var user= Registerdata(item);
                 user.save();
                

        }
        else{
            res.status(400).send("EmailId already exists")
        }
    });
    // const item= new Registerdata({
 
    // name:req.body.user.name,     
    //  email:req.body.user.email,
    //  password:req.body.user.password
     
    //       });
        // const token = await item.generateAuthToken();
        // res.cookie("jwt",token,{
        //   expires:new Date(Date.now() + 30000),
        //   httpOnly:true
        // });
        // var user= Registerdata(item);
        // await user.save();
       
        
        
      
  
      });   
 
  module.exports=signupRouter;