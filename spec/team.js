"use strict"

var testee = require('../js/team.js');

describe("Team CRUD", function(){
	var newTeam;
	var newTeamName;

	beforeEach(function(){
		newTeam = {
			name : null,
			members : []
		};
	});

	describe("New Team", function(){
		it("should create a team with zero members", function(){
			expect(testee.create().members.length).toEqual(0);
		});

		it("should create a new team with a given name", function(){
			newTeamName = "Team Foo";
			expect(testee.create(newTeamName).name).toEqual(newTeamName);
		});

		it("should return a name of 'null' if none is given", function(){
			expect(testee.create().name).toBe(null);
		});
	});

	describe("addMember", function(){
		it("should create a new named team member", function(){
			testee.addMember(newTeam, "Foo McBarr");

			expect(newTeam.members.length).toEqual(1);
			expect(newTeam.members[0]).toEqual({
				name: "Foo McBarr"
			});
		});
	});

	describe("addMembers", function(){
		it("should create new named team members", function(){
			testee.addMember(newTeam, "Foo McBarr");
			testee.addMember(newTeam, "Rand McNalley");
			testee.addMember(newTeam, "Lol McCatly");
			testee.addMember(newTeam, "Bat McFlapsalot");

			expect(newTeam.members.length).toEqual(4);

			expect(newTeam.members[0]).toEqual({name: "Foo McBarr"});
			expect(newTeam.members[1]).toEqual({name: "Rand McNalley"});
			expect(newTeam.members[2]).toEqual({name: "Lol McCatly"});
			expect(newTeam.members[3]).toEqual({name: "Bat McFlapsalot"});
		});
		
		it("should handle a 'null' name given explicitly", function(){
			testee.addMember(newTeam, "Foo McBarr");
			testee.addMember(newTeam, null);
			testee.addMember(newTeam, "Lol McCatly");
			testee.addMember(newTeam, "Bat McFlapsalot");

			expect(newTeam.members.length).toEqual(4);

			expect(newTeam.members[0]).toEqual({name: "Foo McBarr"});
			expect(newTeam.members[1]).toEqual({name: null});
			expect(newTeam.members[2]).toEqual({name: "Lol McCatly"});
			expect(newTeam.members[3]).toEqual({name: "Bat McFlapsalot"});
		});
	});
});
