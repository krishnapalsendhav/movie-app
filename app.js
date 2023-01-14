const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./database/mongoDB');
const movies = require('./routes/movie'); 
const movie2 = require('./routes/movie2');

app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use('/api/v1/movies',movies);
app.use('/api/v2/movies',movie2);

const port = 5000;
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