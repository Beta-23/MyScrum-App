angular.module('MyScrums')
.controller('MyscrumController', MyscrumController);

MyscrumController.$inject = ['$http'];

function MyscrumController($http){
	var self = this;
	self.all = [];
	self.addMyscrum = addMyscrum;
	self.newMyscrum = {};
	self.getMyscrums = getMyscrums;
	self.deleteMyscrum = deleteMyscrum;

	getMyscrums();

	function getMyscrums(){
		$http
		.get('http://localhost:3000/myscrums')
		.then(function(response){
			self.all = response.data.myscrums;
		});
	}
	function addMyscrum(){

		$http
			.post('http://localhost:3000/myscrums', self.newMyscrum)
			.then(function(response){
			getMyscrums();
		});
		self.newMyscrum = {};
		}
	function deleteMyscrum(myscrum){
		$http
			.delete("http://localhost:3000/myscrums" + myscrum._id)
			.then(function(response){
				var index = self.all.indexOf(myscrum);
				self.all.splice(index, 1);
		});
	}	
}