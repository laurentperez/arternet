'use strict';

/* App Module */

var gameApp = angular.module('gameApp', [
  'ngRoute',
  'gameControllers',
  'gameFilters'
]);

gameApp.factory('service', function($rootScope) {
  var actor;
  var actors;
  var score = 0;
  return {
    setActors: function(actors) {
      this.actors = actors;
    },
    getActors: function() {
      return this.actors;
    },
    setActor: function(actor) {
      this.actor = actor;
    },
    getActor: function(id) {
      for(var i=0; i<this.actors.length; i++) {
        var aid = this.actors[i].id.toString();
        if(aid === id) {
          return this.actors[i];
        }
      }
    },
    nextActor: function(){
      var index = this.actors.indexOf(this.actor);
      console.log("index:" + index);
      var nextItem;
     if(index >= 0 && index < this.actors.length - 1) {
         nextItem = this.actors[index + 1];
     }
      return nextItem;
    },
    getScore: function() {
      return this.score;
    }

  };
});

gameApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      when('/actors/:actorId', {
        templateUrl: 'partials/actor.html',
        controller: 'ActorCtrl'
      }).
            when('/play/:actorId', {
        templateUrl: 'partials/play.html',
        controller: 'PlayCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
