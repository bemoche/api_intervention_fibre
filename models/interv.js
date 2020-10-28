const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create interv Schema & model
const IntervSchema = new Schema({
    rc: {type:String},
    email: {type:String},
    echec: {type:String},
    operateur: {type:String},
    grille: {type:String},
    code_postal: {type:String},
    rdv_date: {type:String},
    rdv_heur: {type:String},
    client_present: {type:String},
    hotline: {type:String},
    pm: {type:String},
    pbo: {type:String},
    desserte: {type:String},
    pto: {type:String},
    box_envoi: {type:String},
    box_etat: {type:String},
    decharge: {type:String},
    commentaire: {type:String}
});

const Interv = mongoose.model('interv', IntervSchema);
module.exports = Interv;
