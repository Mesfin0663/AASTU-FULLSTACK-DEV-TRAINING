const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true // `email` must be unique

    },
    password:{
        type: String,
        required: true
    },
  
},
{
  timestamps: true
}
)

module.exports = mongoose.model('Note',userSchema)