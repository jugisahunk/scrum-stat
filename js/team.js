module.exports = Team;

function Team(teamName, teamMembers){
	this._name = teamName;
	this._members = teamMembers || [];
}

Team.prototype.addMember = function (teamMemberName){
	this._members.push({ name : teamMemberName});
}

Team.prototype.name = function (){
	return this._name;
}
