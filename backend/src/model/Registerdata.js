const mongoose = require('mongoose');
const bcrypt=require('bcryptjs');
// const jwt = require('jsonwebtoken')
mongoose.connect('mongodb://localhost:27017/media1',{ useNewUrlParser: true, useUnifiedTopology: true });
const Schema = mongoose.Schema;

registerSchema = new Schema( {	
		
	name: String,	
	email: String,
	password: String,  
    })

registerSchema.pre("save",async function(next){
    if(this.isModified("password")){
    // const password=await bcrypt.hash(password,10);
    
    console.log(`the current password is ${this.password}`);
    this.password=await bcrypt.hash(this.password,10);
    console.log(`the current password is ${this.password}`);
    
    
    }
    next();
})
var Registerdata = mongoose.model('Registerdata',registerSchema);

module.exports = Registerdata;