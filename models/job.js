const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose
// require('./category');

const jobSchema = require('./jobSchema');

module.exports = mongoose.model('Item', jobSchema);
