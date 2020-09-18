const mongoose = require('mongoose');

const emailSchema = mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: [true, 'Name is required'],
        maxlength: [20, 'The name should be shorter then 20 symbols']
    },
    email:{
        type: String,
        trim: true,
        required: [true, 'Please provide Email']
    },
    message:{
        type: String,
        trim: true,
        required: [true, 'Message should be provided'],
        minlength: [5, 'Length should be minimum 5 symbols'],
        maxlength: [350, 'Length no more then 350 letters']
    }
})

const Email = mongoose.model('Email', emailSchema);

module.exports = Email;