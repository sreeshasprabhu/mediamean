const express=require('express');
const jwt = require('jsonwebtoken');
var nodemailer=require('nodemailer');
const Registerdata =require('../model/Registerdata');
const Admindata=require('../model/AdminData') 
const superadmin =express.Router();
username='admin';
 password='1234';
 function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretkey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }
  superadmin.post('/',(req,res)=>{
      console.log(req.body)
    let userData=req.body
    if(!username){
        res.status(401).send('Invalid Username');
    }
    else if(password!==userData.pass){
        res.status(401).send('Invalid Password');
    }
    else{
        let payload={subject:username+password}
        let token =jwt.sign(payload,'secretkey')
        res.status(200).send({token});
    }
})

superadmin.post('/adminlist',async function (req, res) {
   
  console.log(req.body);

  var adminlist = {
    name: req.body.admin.name,
    email: req.body.admin.email,
    password:req.body.admin.name
    
  
  }
  var adminlist =new Admindata(adminlist);
  adminlist.save();
  const useremail=await Registerdata.findOne({email:adminlist.email})
  
  var transport=nodemailer.createTransport(
    {
      service:'gmail',
      auth:{
        user:'mittup2020@gmail.com',
        pass:'mittupoocha@1'
      }
    }
  )
  
  var mailOptions={
    
    from:'mittup2020@gmail.com',
    to:adminlist.email,
    subject:'You are Approved as admin',
    text:`Congratulations ${adminlist.name}.You are approved as Admin and your password is ${adminlist.password}.`
  }
  transport.sendMail(mailOptions,function(error,info){
    if(error){
      console.log(error)
    }
    else{
      console.log("email sent"+info.response)
    }
  })
  Registerdata.findOneAndDelete({"_id":useremail._id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  });

module.exports=superadmin;