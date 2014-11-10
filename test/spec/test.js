/* global describe, it */

(function() {
    'use strict';

    console.log(YeomanBackboneTutorial);

    describe('Tracking Project', function() {
        describe("Application", function() {
            it("creates a global variable for the name space", function() {
                should.exist(YeomanBackboneTutorial);
            });
            it("creates only one model", function() {
                should.exist(YeomanBackboneTutorial.Models.Todo);
            });
            it("creates only one collection", function() {
                should.exist(YeomanBackboneTutorial.Collections.Todos);
            });
            it("creates a singular 'Todo' view", function() {
                should.exist(YeomanBackboneTutorial.Views.Todo);
            });
        });
        describe("Todo Model", function() {
            describe("Initialization", function() {
                beforeEach(function() {
                    this.myModel = new YeomanBackboneTutorial.Models.Todo;
                });
                it("should default the status to 'pending'", function() {
                    this.myModel.get('completed').should.be.false;
                });
                it("should default the title to an empty string", function() {
                    expect(this.myModel.get('title')).to.equal('');
                });
            });
            describe("Persistence", function() {
                //Setup new model object
                this.myModel = new YeomanBackboneTutorial.Models.Todo;

                it("should successfully store values in local storage", function() {
                    expect(this.myModel.set("title", "Grocery List"));
                });
                it("should successfully retrieve values from local storage", function() {
                    expect(this.myModel.get("title")).to.equal("Grocery List");
                    console.log('Title object = "' + this.myModel.get("title") + '"');
                });
            });
        });
    });
})();
