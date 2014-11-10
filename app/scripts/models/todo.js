/*global YeomanBackboneTutorial, Backbone*/

YeomanBackboneTutorial.Models = YeomanBackboneTutorial.Models || {};

(function () {
    'use strict';

    YeomanBackboneTutorial.Models.Todo = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        // validate: function(attrs, options) {
        // },

        // parse: function(response, options)  {
        //     return response;
        // },

        defaults: {
            title: '',
            completed: false
        },
     
        toggle: function () {
            this.save({
                completed: !this.get('completed')
            });
        }
    });

})();
