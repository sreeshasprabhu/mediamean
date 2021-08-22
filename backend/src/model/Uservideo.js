const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/media1',{ useNewUrlParser: true, useUnifiedTopology: true });
const Schema = mongoose.Schema;
var UserVideoSchema = new Schema({
    
    
            video:String,        
            thumbnail: String,
            title: String ,
            description: String ,
            tags: String ,
            category: String   
    
});
var Uservideo = mongoose.model('RagaData', UserVideoSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Uservideo ;