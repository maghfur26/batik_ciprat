const mongoose = require('mongoose');

const proudctSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    Image: {
        type: String,
        required: true
    }
})