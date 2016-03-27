angular.module('MyScrums')
.controller('MyscrumsController', MyscrumsController);

MyscrumsController.$inject = ['$http'];

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
		.then(function(res){
			self.all = res.data.myscrums;
		});
	}
	function addMyscrum(){
		$http
			.post('http://localhost:3000/myscrums', self.newMyscrum)
			.then(function(res){
			getMyscrums();
		});
		self.newMyscrum = {};
		}
	function deleteMyscrum(myscrum){
		$http
			.delete("http://localhost:3000/myscrums" + myscrum._id)
			.then(function(res){
				var index = self.all.indexOf(myscrum);
				self.all.splice(index, 1);
		});
	}	
}