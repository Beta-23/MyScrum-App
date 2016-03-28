var express = require('express'),
	router = express.Router(),
	//parses information from POST
	bodyParser = require('body-parser'),
	//used to manipulate POST
	methodOverride = require('method-override');

var myscrumsController = require('../controllers/myscrums');

router.route('/myscrums')

	//GET all myscrums (ideas)
	.get(myscrumsController.getAll)

	//POST a new scrum idea
	.post(myscrumsController.createMyscrum);

router.route('/myscrums/:id')
	
	// GET return specific scrum idea
	.get(myscrumsController.getMyscrum)

	// PATCH update existing idea post
	.patch(myscrumsController.updateMyscrum)

	//DELETE specific scrum idea from database
	.delete(myscrumsController.deleteMyscrum);

module.exports = router;


