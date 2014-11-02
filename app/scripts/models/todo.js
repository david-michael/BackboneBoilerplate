/*global YeomanBackboneTutorial, Backbone*/

YeomanBackboneTutorial.Models = YeomanBackboneTutorial.Models || {};

(function () {
    'use strict';

    YeomanBackboneTutorial.Models.Todo = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
