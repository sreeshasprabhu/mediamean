const express=require('express');
const jwt = require('jsonwebtoken');
const app=new express();
const cors = require('cors');
const formidable=require('formidable')
const fileSystem=require('fs');
const Uservideo =require('./src/model/Uservideo');
var multer  = require('multer')
var path = require('path');
const Registerdata =require('./src/model/Registerdata');
const AdminData=require('./src/model/AdminData')
var {getVideoDuration}=require("get-video-duration");
const storage=multer.diskStorage({
    destination: './public/videos',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
 }

})
const upload = multer({ storage: storage })
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

 const signupRouter =require('./src/routes/signuproutes');
 const signinRouter =require('./src/routes/signinroutes');
 const superadmin=require('./src/routes/superadmin')
 
 app.use('/signup',signupRouter);
 app.use('/signin',signinRouter);
 app.use('/superadmin',superadmin);
app.post('/uservideo',upload.single('video'),function(req,res){
    console.log(req.body);
    console.log(req.file);
    const item= new Uservideo({        
        video:req.body.uservideo.video,     
        thumbnail:req.body.uservideo.thumbnail,
        title:req.body.uservideo.title,
        description:req.body.uservideo.description,
        tags:req.body.uservideo.tags,
        category:req.body.uservideo.category        
 });
 var user= Uservideo(item);
 user.save();
})
app.get('/users',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    Registerdata .find()
                .then(function(users){
                    res.send(users);
                });
});
app.get('/:id',function (req,res){
    const id= req.params.id;
    console.log(id)
    Registerdata .findOne({_id:id})
    .then(function(user){
       res.send(user);
    })
  });
  app.post('/admin',(req,res)=>{
    console.log(req.body);
	AdminData.findOne({ email: req.body.email }, (err, data) => {
		if (data) {

			if (data.password == req.body.password) {
				//console.log("Done Login");
				//req.session.userId = data._id;
				//console.log(req.session.userId);
				// res.send({ "Success": "Success!" });
				//res.redirect('/welcome');
               
                let payload={subject:data.name+data.password}
                let token =jwt.sign(payload,'secretkey')
                res.status(200).send({token});

			} else {
				//res.send({ "Success": "Wrong password!" });
                res.status(401).send('Wrong password');

			}
		} else {
			//res.send({ "Success": "This Email Is not regestered!" });
            res.status(401).send('This Email Is not regestered');

		}
	});
});

//  app.post('/uservideo',function(req,res){
//     var path = require('path');
//      console.log("hai")
//     var formdata=new formidable.IncomingForm();
//     formdata.maxFileSize=1000 * 1024 * 1024;
//     formdata.parse(req,function(error,fields,files){
//         console.log(req.body)
//         var title=fields.title;
//         var description=fields.description;
//         var tags=fields.tags;
//         var category=fields.category;
//         var oldpathThumbnail=files.thumbnail.path;
//         var thumbnail="public/thumbnails" + new Date().getTime() + "-" + files.thumbnail.name;
//         fileSystem.rename(oldpathThumbnail,thumbnail,function(error){

//         })
//         var oldpathvideo=files.video.path;
//         var newpath="public/videos/" + new Date().getTime() + "-" + files.video.name;
//         fileSystem.rename(oldpathvideo,newpath,function(error){
//             var currentTime=new Date().getTime();
//             //getvideoduration
//             getvideoduration(newpath).then(function(duration){
//                 var hours=Math.floor(duration /60/60);
//                 var minutes = Math.floor(duration / 60) - (hours * 60);
// 				var seconds = Math.floor(duration % 60);
           
//             console.log(req.body);
   
//                 var uservideo = {       
//                     video : newpath,
//                     thumbnail:thumbnail,
//                     title : title,
//                     description :description,
//                     tags : tags,
//                     category:category,
//                     views: 0,
//                     watch: currentTime,
// 					minutes: minutes,
// 					seconds: seconds,
// 					hours: hours
//                 }
									
//                     var uservideo = new Uservideo (uservideo);
//                     uservideo.save();
//                      })
                    
               
//         })
    //     console.log(req.body);
   
    //             var uservideo = {       
    //                 video : newpath,
    //                 thumbnail:thumbnail,
    //                 title : title,
    //                 description :description,
    //                 tags : tags,
    //                 category:category,
    //                 views: 0,
    //                 watch: currentTime,
	// 				minutes: minutes,
	// 				seconds: seconds,
	// 				hours: hours
									

                    
    //         }       
    //         var uservideo = new Uservideo (uservideo);
    //         uservideo.save();
    // })
//})

 

// app.post('/uservideo',upload.single('file'),function(req,res){
//     console.log(req.body);
//     const item= new Uservideo({
        
//         video:req.file.filename,     
//         thumbnail:req.file.filename,
//         title:req.body.uservideo.title,
//         description:req.body.uservideo.description,
//         tags:req.body.uservideo.tags,
//         category:req.body.uservideo.category




        
// });
// var user= Uservideo(item);
//  user.save();
// })
app.listen(5000);