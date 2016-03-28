var Myscrum = require('../models/Myscrum');

//GET
function getAll(request, response) {
	Myscrum.find(function(error, myscrums){
		if(error) response.json({message: 'Woops! Idea not found'});

		response.json({myscrums: myscrums});
	}).select('-__v');
}
//POST
function createMyscrum(request, response){
	
	console.log('body:',request.body);

	var myscrum = new Myscrum(request.body);

	myscrum.save(function(error){
		if(error) response.json({message: 'Woops, not able to create idea:' + error});

		response.json({myscrum: myscrum});
	});
}

//GET
function getMyscrum(request, response) {
	//set variable to url req to specific scrum idea
	var id = request.params.id;

	Myscrum.findById({_id: id}, function(error, myscrum){
		if(error) response.json({message: 'Woops! could not find idea' + error});
		
		response.json({myscrum: myscrum});
	}).select('-__v');
}

function updateMyscrum(request, response) {
	var id = request.params.id;

	Myscrum.findById({_id: id}, function(error, myscrum){
		if(error) response.json({message: 'Woops! could not find idea' + error});
		
		if(request.body.title) myscrum.title = request.body.title;
		if(request.body.descritpion) myscrum.descritpion = request.body.descritpion;
		if(request.body.progress) myscrum.progress = request.body.progress;
		// if(request.body.points) myscrum.points = request.body.points;

		myscrum.save(function(error){
			if(error) response.json({message: 'Woops! idea was not updated,' + error});

			response.json({message: 'Idea updated successfully!', myscrum: myscrum});
		});
	}).select('-__v');
}

function deleteMyscrum(request, response){
	console.log('got rquest to delete');
	var id = request.params.id;

	Myscrum.delete({_id: id}, function(error){
		if(error) response.json({message: 'Woops! idea was not deleted' + error });

		response.json({message: 'Idea was deleted successfully!'});

	}).select('-__v');
}

module.exports = {
	getAll: getAll,
	createMyscrum: createMyscrum,
	getMyscrum: getMyscrum,
	updateMyscrum: updateMyscrum,
	deleteMyscrum: deleteMyscrum
};
