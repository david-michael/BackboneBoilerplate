/*global YeomanBackboneTutorial, Backbone*/

YeomanBackboneTutorial.Collections = YeomanBackboneTutorial.Collections || {};

(function () {
    'use strict';

    YeomanBackboneTutorial.Collections.Todos = Backbone.Collection.extend({

        // model: YeomanBackboneTutorial.Models.Todo,

	    localStorage: new Backbone.LocalStorage('backbone-generator-todos'),

	    initialize: function () {
	        this.model = YeomanBackboneTutorial.Models.Todos;
	    }

    });

})();
