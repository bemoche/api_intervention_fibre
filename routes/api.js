const express = require('express');
const router = express.Router();
const Interv = require('../models/interv');
const verify = require('./verifyToken');


//get list of interventions from DB
router.get('/', verify, function(req,res,next){
    Interv.find().then(function(interv){
        //console.log(interv);
        console.count("All_Interv_GET_Count");
        console.log(interv.length + ' interventions dans DB');
        res.send(interv)
    });
});

//get interv by id
router.get('/:id', function(req,res,next){
    Interv.findById(req.params.id).then(function(interv){
        res.send(interv);
    });
});

//get interv by rc
router.get('/rc/:rc', function(req,res,next){
    Interv.find({"rc":req.params.rc}).then(function(interv){
    res.send(interv);
    });
});

//get interv by tech
router.get('/tech/:tech', function(req,res,next){
    Interv.find({"email":req.params.tech}).then(function(interv){
        res.send(interv);
    });
});

//add a new intervention to DB
router.post('/', function(req,res,next){
    Interv.create(req.body).then(function(interv){
        res.send(interv);
    }).catch(next);
});

//update a intervention in DB
router.put('/:id', function(req,res,next){
    Interv.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
        Interv.findOne({_id:req.params.id}).then(function(interv){
            res.send(interv);
        });
    });
});

//delete intervention in DB
router.delete('/:id', function(req,res,next){
    Interv.findByIdAndRemove({_id:req.params.id})
    .then(function(interv){
        res.send(interv);
    });
});

module.exports = router;
