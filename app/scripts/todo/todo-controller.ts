/// <reference path="../../definition/angularjs/angular.d.ts" />

module ToDoControllerModule {
  'use strict';

  class ToDoCtrl {
    taskLabel: String;

    static $inject = ['ToDoService']
    constructor(public todoService) {}

    create() {
      this.todoService.create(this.taskLabel);
      this.taskLabel = '';
    }

    toggleDone(task: ToDoServiceModule.Task) {
      this.todoService.toggleDone(task);
    }

    getTasks() {
      return this.todoService.tasks;
    }
  }

  angular.module('tutorialAngularTypescriptApp')
    .controller('ToDoCtrl', ToDoCtrl);

}
