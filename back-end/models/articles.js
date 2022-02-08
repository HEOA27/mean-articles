const mongoose = require('mongoose');
const {Schema} = mongoose;

const ArticlesSchema=new Schema({
    name:{ type: String, requires: true},
    description: {type: String, required: true},
    department: {type: String, required: true },
    stock:{type: Number, required: true},
    up: {type: Number, required: true}
});

module.exports= mongoose.model('article',ArticlesSchema);