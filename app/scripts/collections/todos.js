/*global YeomanBackboneTutorial, Backbone*/

YeomanBackboneTutorial.Collections = YeomanBackboneTutorial.Collections || {};

(function () {
    'use strict';

    YeomanBackboneTutorial.Collections.Todos = Backbone.Collection.extend({

        model: YeomanBackboneTutorial.Models.Todos

    });

})();
