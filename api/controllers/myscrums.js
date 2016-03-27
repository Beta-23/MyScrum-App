var Myscrum = require('../models/Myscrum');

//GET
function getAll(req, res) {
	Myscrum.find(function(error, myscrums){
		if(error) res.json({message: 'Woops! Idea not found'});

		res.json({myscrums: myscrums});
	}).select('-__v');
}
//POST
function createMyscrum(req, res){
	console.log('in POST');
	console.log('body:',req.body);

	var myscrum = new Myscrum(req.body);

	myscrum.save(function(error){
		if(error) res.json({message: 'Woops, not able to create idea:' + error});

		res.json({myscrum: myscrum});
	});
}

//GET
function getMyscrum(req, res) {
	//set variable to url req to specific scrum idea
	var id = req.params.id;

	Myscrum.findById({_id: id}, function(error, myscrum){
		if(error) res.json({message: 'Woops! could not find idea' + error});
		
		res.json({myscrum: myscrum});
	}).select('-__v');
}

function updateMyscrum(req, res) {
	var id = req.params.id;

	Myscrum.findById({_id: id}, function(error, myscrum){
		if(error) res.json({message: 'Woops! could not find idea' + error});
		
		if(req.body.title) myscrum.title = req.body.title;
		if(req.body.descritpion) myscrum.descritpion = req.body.descritpion;
		if(req.body.progress) myscrum.progress = req.body.progress;
		if(req.body.points) myscrum.points = req.body.points;

		myscrum.save(function(error){
			if(error) res.json({message: 'Woops! idea was not updated,' + error});

			res.json({message: 'Idea updated successfully!', myscrum: myscrum});
		});
	}).select('-__v');
}

function removeMyscrum(req, res){
	var id = req.params.id;

	Myscrum.remove({_id: id}, function(error){
		if(error) res.json({message: 'Woops! idea was not deleted' + error });

		res.json({message: 'Idea was deleted successfully!'});

	}).select('-__v');
}

moules.exports = {
	getAll: getAll,
	createMyscrum: createMyscrum,
	getMyscrum: getMyscrum,
	updateMyscrum: updateMyscrum,
	removeMyscrum: removeMyscrum
};
