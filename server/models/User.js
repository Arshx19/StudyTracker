const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    totalHours: {
        type: Number,
        default: 0
    },
    streak: {
        type: Number,
        default: 0
    },
    points: {
        type: Number,
        default: 0
    },
    lastStudyDate: {
        type: Date
    },
},{timestamps:true});

module.exports = mongoose.model('User', userSchema);
