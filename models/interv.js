const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create interv Schema & model
const IntervSchema = new Schema({
    rc: {
        type:Number,
        //required:true,
        min:7
    },
    email: {
        type:String,
        //required:true
    },
    echec: {
        type:Boolean,
        //required:true
    },
    operateur: {
        type:String,
        //required:true
    },
    grille: {
        type:String,
        //required:true
    },
    code_postal: {
        type:Number,
        min:5
    },
    rdv_date: {
        type:Date,
        required:true
    },
    rdv_heur: {
        type:String,
        required:true
    },
    client_present: {
        type:Boolean,
        required:true
    },
    hotline: {
        type:Boolean,
        required:true
    },
    pm: {
        type:String,
    },
    pbo: {
        type:String,
        required:true
    },
    desserte: {
        type:String,
        required:true
    },
    pto: {
        type:Boolean,
        required:true
    },
    box_envoi: {
        type:String,
        required:true
    },
    box_etat: {
        type:Boolean,
        required:true
    },
    decharge: {
        type:String
    },
    commentaire: {
        type:String
    }
});

const Interv = mongoose.model('interv', IntervSchema);
module.exports = Interv;
