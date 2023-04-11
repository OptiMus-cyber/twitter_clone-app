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
        mongoose.connect('mongodb+srv://rautelaprakash543:pmjfhDqIfuPzyy2h@twittercluster.3hf3cjs.mongodb.net/?retryWrites=true&w=majority')
        .then(()=>{
            console.log("Database connection is successful");
        })
        .catch((err)=>{
            console.log("database connection error:"+ err);
        })
    }
}

module.exports = new Database();