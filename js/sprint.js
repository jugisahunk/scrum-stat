module.exports = Sprint;

var Team = require('../js/team.js');

function Sprint(sprintName, sprintTeam){
	this.name = sprintName;
	this.team = sprintTeam || new Team();;
	this.isComplete = false;
}

Sprint.prototype.complete = function (){
	this.isComplete = true;
	this.velocity = 32;
}
