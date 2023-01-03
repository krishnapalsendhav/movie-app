const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./database/mongoDB');
const movies = require('./routes/movie'); 

app.use(express.json());
app.use('/api/v1/movies',movies);

const port = 3000;
const start =async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log(`Server running on port : ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
};
start();