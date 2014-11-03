/*global YeomanBackboneTutorial, $*/


window.YeomanBackboneTutorial = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
        new this.Views.Todos({
            collection: new this.Collections.Todos()
        });
    }
};

$(document).ready(function () {
    'use strict';
    YeomanBackboneTutorial.init();
});
