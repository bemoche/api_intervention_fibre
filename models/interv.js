const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create interv Schema & model
const IntervSchema = new Schema({
    rc: Number,
    email: String,
    echec: Boolean,
    operateur: String,
    grille: String,
    code_postal: Number,
    rdv_date: String,
    rdv_heur: String,
    client_present: Boolean,
    hotline: Boolean,
    pm: String,
    pbo: {
        "type": String,
        "enum": ["Poteau", "Façade", "Chambre", "Immeuble"]},
    desserte: {
        "type": String,
        "enum": ["Aérien", "Façade", "Souterrain", "Aéro-Souterrain", "Fourreau", "Apparent"]},
    pto: {
        "type": String,
        "enum": ["Oui", "Non", "Oui/Non"]},
    box_envoi: {
        "type": String,
        "enum": ["Reçu", "PasReçu", "????"]},
    box_etat: {
        "type": String,
        "enum": ["OK", "NOK"]},
    decharge: String,
    commentaire: String
});

const Interv = mongoose.model('interv', IntervSchema);
module.exports = Interv;
