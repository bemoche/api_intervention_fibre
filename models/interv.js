const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create interv Schema & model
const IntervSchema = new Schema({
    rc: Number,
    email: String,
    echec: String,
    operateur: String,
    grille: String,
    code_postal: String,
    rdv_date: String,
    rdv_heur: String,
    client_present: String,
    hotline: String,
    pm: String,
    pbo: String,
    desserte: String,
    pto: String,
    box_envoi: String,
    box_etat: String,
    decharge: String,
    commentaire: String
});

const Interv = mongoose.model('interv', IntervSchema);
module.exports = Interv;
