/* global describe, it */

(function() {
    'use strict';
    var app = app || {};
    console.log(app);

    describe('Tracking Project', function() {
        describe('Application', function() {
            it('creates a global variable "app" for the name space', function() {
                should.exist(app);
            });
            it('creates singular "Todo" model', function() {
                should.exist(app.Todo);
            });
            it('creates a singular "todos" collection', function() {
                should.exist(app.Todos);
            });
            it('creates a singular "AppView" view', function() {
                should.exist(app.AppView);
            });
            it('creates a singular "TodoView" view', function() {
                should.exist(app.TodoView);
            });
            it('creates a singular "TodoRouter" router', function() {
                should.exist(app.TodoRouter);
            });
        });
        describe('Todo Model', function() {
            describe('Initialization', function() {
                beforeEach(function() {
                    this.myModel = new app.Todo();
                });
                it('should default the status to "pending"', function() {
                    expect(this.myModel.get('completed')).should.equal(false);
                });
                it('should default the title to an empty string', function() {
                    expect(this.myModel.get('title')).to.equal('');
                });
            });
            describe('Persistence', function() {
                //Setup new model object
                this.myModel = new app.Todo();

                it('should successfully store values in local storage', function() {
                    expect(this.myModel.set('title', 'Grocery List'));
                });
                it('should successfully retrieve values from local storage', function() {
                    expect(this.myModel.get('title')).to.equal('Grocery List');
                });
            });
        });
    });
})();
