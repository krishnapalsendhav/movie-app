const mongoose = require('mongoose');
const connectDB = (url)=>{
    mongoose.set('strictQuery',true);
    mongoose.connect(url,{ useNewUrlParser : true, useUnifiedTopology : true }).then(()=>console.log('Successfully Connected')).catch((err)=>console.log(err));
};

module.exports = connectDB;