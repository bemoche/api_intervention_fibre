const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create interv Schema & model
const IntervSchema = new Schema({
    rc: {
        "type": Number,
        "required": true},
    email: {
        "type": String,
        "required": true},
    echec: {
        "type":String,
        "required":true},
    operateur: {
        "type": String,
        "required": true},
    grille: {
        "type": String,
        "required": true},
    code_postal: Number,
    rdv_date: {
        "type": String,
        "required": true},
    rdv_heur: {
        "type": String,
        "required": true},
    client_present: Boolean,
    hotline: {
        "type": String,
        "required": true},
    pm: String,
    pbo: {
        "type": String,
        "required": true,
        "enum": ["Poteau", "Façade", "Chambre", "Immeuble"]},
    desserte: {
        "type": String,
        "required": true,
        "enum": ["Aérien", "Façade", "Souterrain", "Aéro-Souterrain", "Fourreau", "Apparent"]},
    pto: {
        "type": String,
        "required": true,
        "enum": ["Oui", "Non", "Oui/Non"]},
    box_envoi: {
        "type": String,
        "required": true,
        "enum": ["Reçu", "PasReçu", "????"]},
    box_etat: {
        "type": String,
        "required": true,
        "enum": ["OK", "NOK"]},
    decharge: String,
    commentaire: String
});

const Interv = mongoose.model('interv', IntervSchema);
module.exports = Interv;
