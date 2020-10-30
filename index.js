const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

//set up express app
const app = express();

//connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true},
    () => console.log('connected to DB')
);
mongoose.Promise = global.Promise;

//Middlewares
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

//initialise routes
const apiRouter = require('./routes/api');
const authRouter = require('./routes/auth');

//Routes Middlewares
app.use('/api',apiRouter);
app.use('/api/user',authRouter);


//erreur handling
app.use(function(err,req,res,next){
    res.status(422).send({error:err.message});
});

//lisen for requests
app.listen(process.env.PORT || 3000, () => console.log('listening for requests'));
