module.exports = Sprint;

var Team = require('../js/team.js');

function Sprint(sprintName, sprintTeam){
	this._name = sprintName;
	this.team = sprintTeam || new Team();;
	this._isComplete = false;
}

Sprint.prototype.completeSprint = function (){
	this._isComplete = true;
	this.velocity = 32;
}

Sprint.prototype.isComplete = function(){
	return this._isComplete;
};
