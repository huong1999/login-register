const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const database = require("../database");

const Schema = mongoose.Schema;

const titleShema = new Schema({
    subject:{
        type: String
    },
    content:{
        type:String
    },
    likes:{
        type: Number
    },
    year:{
        type:Number
    },
    languages:{
        type: String
    }
}, {versionKey: false});

const Titles = database.model('Titles', titleShema);
module.exports = Titles;