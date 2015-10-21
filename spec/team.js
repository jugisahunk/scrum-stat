"use strict"

var Team = require('../js/team.js');

describe("Team CRUD", function(){
	describe("New Team", function(){
		it("should create a team with zero members", function(){
			var newTeam = new Team();

			expect(newTeam._members.length).toEqual(0);
		});

		it("should create a new team with a given name", function(){
			var newTeamName = "Team Foo";
			var newTeam = new Team(newTeamName);

			expect(newTeam.name()).toEqual(newTeamName);
		});

		it("should return 'undefined' if no name is given", function(){
			var newTeam = new Team();
			expect(newTeam.name()).toBe(undefined);
		});
	});

	describe("addMember", function(){
		it("should create a new named team member", function(){
			var newTeam = new Team();
			newTeam.addMember("Foo McBarr");

			expect(newTeam._members.length).toEqual(1);
			expect(newTeam._members[0]).toEqual({
				name: "Foo McBarr"
			});
		});

		it("should create new named team members", function(){
			var newTeam = new Team();

			newTeam.addMember("Foo McBarr");
			newTeam.addMember("Rand McNalley");
			newTeam.addMember("Lol McCatly");
			newTeam.addMember("Bat McFlapsalot");

			expect(newTeam._members.length).toEqual(4);

			expect(newTeam._members[0]).toEqual({name: "Foo McBarr"});
			expect(newTeam._members[1]).toEqual({name: "Rand McNalley"});
			expect(newTeam._members[2]).toEqual({name: "Lol McCatly"});
			expect(newTeam._members[3]).toEqual({name: "Bat McFlapsalot"});
		});

		it("should handle a no name given explicitly", function(){
			var newTeam = new Team();
			newTeam.addMember("Foo McBarr");
			newTeam.addMember();
			newTeam.addMember("Lol McCatly");
			newTeam.addMember("Bat McFlapsalot");

			expect(newTeam._members.length).toEqual(4);

			expect(newTeam._members[0]).toEqual({name: "Foo McBarr"});
			expect(newTeam._members[1]).toEqual({name: undefined});
			expect(newTeam._members[2]).toEqual({name: "Lol McCatly"});
			expect(newTeam._members[3]).toEqual({name: "Bat McFlapsalot"});
		});
	});
});
