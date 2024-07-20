const mongoose = require('mongoose');
const urlSchema = new mongoose.Schema({
    shortId:{
        type: String,
        required: true,
        unique: true,
    },
    redirectUrl:{
        type: String,
        required: true,
    },
    clickCount:{
        type: Number,
        required: true,
        default: 0,
    },
    visitHistory:[{timestamp:{type:Number}}],
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
    },{timestamps:true});
    
    const URL=mongoose.model('URL',urlSchema);

    module.exports=URL;