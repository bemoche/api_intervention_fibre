const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },

    grille: {
        type: String,
        required: true,
        max:255
    },
    rem: [
            {
            type:Object,
            interv: "Poteau",
            rem:105
        },
        {
            type:Object,
            interv: "Façade",
            rem:75
        },
        {
            type:Object,
            interv: "Chambre",
            rem:70
        },
        {
            type:Object,
            interv: "Immeuble",
            rem:40
        },
        {
            type:Object,
            interv: "plp",
            rem:20
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);