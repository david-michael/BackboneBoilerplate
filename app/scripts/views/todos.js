/*global YeomanBackboneTutorial, Backbone, JST*/

YeomanBackboneTutorial.Views = YeomanBackboneTutorial.Views || {};

(function () {
    'use strict';

    YeomanBackboneTutorial.Views.Todos = Backbone.View.extend({

        el: '#todo-app',

        template: JST['app/scripts/templates/todos.ejs'],

        events: {
            'submit': 'createTodo'
        },

        initialize: function () {
            this.render();

            // this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.collection, 'add', this.addTodoItem);
            this.listenTo(this.collection, 'reset', this.addAllTodoItems);

            try {
                this.collection.fetch();
            } catch(e) {
                // console.log(e.message);
            }
        },

        render: function () {
            // this.$el.html(this.template(this.model.toJSON()));

            this.$el.html(this.template());

            return this;
        },

        createTodo: function (event) {
            event.preventDefault();

            var title = this.$('#new-todo').val().trim();

            if (title) {
                this.collection.create(new YeomanBackboneTutorial.Models.Todo({
                    title: title
                }));

                $('#new-todo').val('');
            }
        },

        addTodoItem: function (todo) {
            var view = new YeomanBackboneTutorial.Views.Todo({ model: todo });
            this.$('ul').append(view.render().el);
        },

        addAllTodoItems: function () {
            this.collection.each(this.addTodoItem, this);
        }

    });

})();
