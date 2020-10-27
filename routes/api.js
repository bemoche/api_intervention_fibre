const express = require('express');
const router = express.Router();
const Interv = require('../models/interv');


//get list of interventions from DB
router.get('/interv', function(req,res,next){
    Interv.find().then(function(interv){
        res.send(interv);
    });
});

//get interv by id
router.get('/interv/:id', function(req,res,next){
    Interv.findById(req.params.id).then(function(interv){
        res.send(interv);
    });
});

//get interv by rc
router.get('/interv/rc/:rc', function(req,res,next){
    Interv.find({"rc":req.params.rc}).then(function(interv){
        res.send(interv);
    });
});

//get interv by tech
router.get('/interv/tech/:tech', function(req,res,next){
    Interv.find({"email":req.params.tech}).then(function(interv){
        res.send(interv);
    });
});

//add a new intervention to DB
router.post('/interv', function(req,res,next){
    Interv.create(req.body).then(function(interv){
        res.send(interv);
    }).catch(next);
});

//update a intervention in DB
router.put('/interv/:id', function(req,res,next){
    Interv.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
        Interv.findOne({_id:req.params.id}).then(function(interv){
            res.send(interv);
        });
    });
});

//delete intervention in DB
router.delete('/interv/:id', function(req,res,next){
    Interv.findByIdAndRemove({_id:req.params.id})
    .then(function(interv){
        res.send(interv);
    });
});

module.exports = router;
