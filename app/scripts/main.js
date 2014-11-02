/*global YeomanBackboneTutorial, $*/


window.YeomanBackboneTutorial = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
    }
};

$(document).ready(function () {
    'use strict';
    YeomanBackboneTutorial.init();
});
