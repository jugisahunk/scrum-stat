module.exports = Team;

var name;
var members;

function Team(teamName, teamMembers){
	this.name = teamName;
	this.members = teamMembers || [];
}

Team.prototype.addMember = function (teamMemberName){
	this.members.push({ name : teamMemberName});
}
