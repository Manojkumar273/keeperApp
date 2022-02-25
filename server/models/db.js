const mongoose = require('mongoose');

const MONGOURI = "mongodb+srv://keeperAppMERN:iTFG8ufUpndWOuhs@cluster0.lbl4b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

module.exports = mongoose.connect(MONGOURI,{
    useUnifiedTopology : true,
    useNewUrlParser : true
}, err => {
    if(err) console.log(`Error in DB connection : ${err}`);
    else console.log("MongoDB connection is succeesful");
})