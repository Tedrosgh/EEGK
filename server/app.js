import express from 'express';
import usersRouter from './routes/mezmur.js';
import setCors from './Middleware/cors.js';
import mongodb from 'mongodb';
import mongoose from 'mongoose';
import { handleErrors, throwerror } from "./Middleware/errors.js";
import { getMezmurs } from './controllers/mezmur.js';

const app = express();
const port = process.env.PORT || 5000;

mongoose
    .connect('mongodb://localhost:27017/mezmurs', {
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true,
    //useFindAndModify: false
    })
    .catch(err => console.log(err));
mongoose.connection.once('open', () => console.log(`Connected to MongoDB on port ${mongoose.connection.port}`));
mongoose.connection.on('error', (err) => console.log(err));

app.use(express.json({ limit: "30mb", extended: true }));
app.use(setCors);
//app.set('view engine', 'ejs');
//app.use(logger);

app.get('/', (req, res)=>{
    // res.download("app.js")
   // res.render("index", { text: "World" })
    console.log("Hallo", getMezmurs)
    res.send(`<p>Hello world, the magic number is ${Math.floor(Math.random()*10)+1}</p>`);
    
});


app.use('/mezmur', usersRouter);

//function logger(req, res, next){
  //  console.log(req.originalUrl)
    //next()
//};
app.use(throwerror);
app.use(handleErrors);

app.listen(port, ()=>console.log(`Express running on port ${port}`));