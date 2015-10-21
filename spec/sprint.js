"use strict"

var Sprint = require('../js/sprint.js');
var Team = require('../js/team.js');

describe("Sprint CRUD", function(){
	describe("New Sprint", function(){
		var newTeam, newSprint;

		beforeEach(function(){
			newTeam = new Team('testname');
			newSprint = new Sprint(newTeam);
		});

		it("should create a sprint with a team", function(){
			expect(newSprint.team).not.toBe(undefined);
		});

		it("should be able to.completeSprint a sprint", function(){
			expect(newSprint.isComplete()).toBeFalsy();

			newSprint.completeSprint();

			expect(newSprint.isComplete()).toBeTruthy();
		});
	});

	describe("Sprint Velocity", function(){
		var newTeam, newSprint;

		beforeEach(function(){
			newTeam = new Team('testname');
			newSprint = new Sprint(newTeam);
		});

		it("should produce a numeric sprint velocity only if.completeSprint", function(){
			expect(newSprint.velocity).toEqual(undefined);
			newSprint.completeSprint();
			expect(newSprint.velocity).toEqual(jasmine.any(Number));
		});
	});
});
