const mongoose = require('mongoose');
//mongoose.set('useNewUrlParser', true);
//mongoose.set('useUnifiedTopology', true);
//mongoose.set('useFindAndModify', false);


class Database{
    
    constructor(){
        this.connect(
            { useNewUrlParser: true },
            { useUnifiedTopology: true },
            { useFindAndModify: false }
        );
    }
    
    connect(){
        mongoose.connect('mongodb+srv://Optimus:8NSaO8zqs5C6dzc9@twitterclonecluster.w36k8.mongodb.net/?retryWrites=true&w=majority')
        .then(()=>{
            console.log("Database connection is successful");
        })
        .catch((err)=>{
            console.log("database connection error:"+ err);
        })
    }
}

module.exports = new Database();