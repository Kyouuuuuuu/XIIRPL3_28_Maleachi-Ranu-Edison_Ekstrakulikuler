const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    kelas: {
        type: String,
        required: [true, 'Silahkan isikan eskul'],
        unique: true,
    },
    nama: {
        type: String,
        required: [true, 'Silahkan isikan nama anda'],
        unique: true,
    },
   
    
    tugas: {
        type: String,
        required: [true, 'Silahkan isikan hobi anda'],
        unique: true,
    },
    pembimbing: {
        type: String,
        required: [true, 'Silahkan isikan nama pembimbing anda'],
        unique: true,
    },
    waktu: {
        type: String,
        required: [true, 'Silahkan isikan jumlah peserta'],
        unique: false,
        // match: [/\S+@\S+\.\S+/, 'Silahkan isi alamat email anda'],
    },


});

module.exports = mongoose.model('nyoba', UserSchema);
