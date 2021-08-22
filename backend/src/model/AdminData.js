const mongoose = require('mongoose');

// const jwt = require('jsonwebtoken')
mongoose.connect('mongodb://localhost:27017/media1',{ useNewUrlParser: true, useUnifiedTopology: true });
const Schema = mongoose.Schema;

adminSchema = new Schema( {	
		
	name: String,	
	email: String,
	password: String,  
    })
    var UserVideoSchema = new Schema({
    
    
        name:String,        
        email: String,
        password: String 

});
    
var Admindata = mongoose.model('Admindata',adminSchema);

module.exports = Admindata;