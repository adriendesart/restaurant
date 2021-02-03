import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './routes/routes.js';

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json())

app.use(express.static('client/build'))

mongoose.connect(process.env.MONGODB, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useFindAndModify: false
})

app.use(routes);

app.listen(PORT, ()=>{
    console.log(`Server listenning on port ${PORT}`)
})