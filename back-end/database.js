const { Mongoose } = require("mongoose")

const mongoose = require('mongoose');

const URL='mongodb://localhost/articles';

mongoose.connect(URL)
.then(db =>console.log('La base de datos esta conectada'))
.catch(err => console.error(err));

module.exports = mongoose;