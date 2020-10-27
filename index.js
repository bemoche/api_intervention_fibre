const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

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

//////////////
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

//initialise routes
app.use('/api',require('./routes/api'));

//erreur handling
app.use(function(err,req,res,next){
    res.status(422).send({error:err.message});
});

//lisen for requests
app.listen(process.env.PORT || 3001, function(){
    console.log('listening for requests');
});
