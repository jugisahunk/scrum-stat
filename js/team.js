module.exports.create = function(teamName){
	var newTeam = {
		name : null,
		members : []
	};

	if(teamName)
		newTeam.name = teamName;

	return newTeam;;
};

module.exports.addMember = function(team, teamMemberName){
	team.members.push({ name : teamMemberName});
};
