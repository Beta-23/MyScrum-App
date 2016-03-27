var mongoose = require('mongoose');

var MyscrumSchema = mongoose.Schema({
	title: String,
	description: String,
	progress: String,
	points: Number

});

module.exports = mongoose.model('Myscrum',MyscrumSchema);