'use strict';

/* App Module */

var gameApp = angular.module('gameApp', [
    'ngRoute',
    'gameControllers',
    'gameFilters'
]);

gameApp.filter("toStatus", function(){
  return function(input) {
    switch(input) {
      case true:
        return "success.png";
      case false:
        return "fail.png";
      default:
        return "sucess.png";
    } 
  };
});

gameApp.factory('service', function ($rootScope) {

    var actor;
    var actors;
    var moviesPlayed = [];

    return {
        updateMoviePlayed: function(actor, success) {
            console.log("(updateMoviePlayed) " + actor.id + "/" + success);
            // todo remove if we keep the reset at home
            var alreadyPlayed = false;
            for(var k in moviesPlayed){
              if(moviesPlayed[k].actor.id === actor.id) {
                console.log("actor id:" + actor.id + " has already been played");
                alreadyPlayed = true;
              }
            }
            if(!alreadyPlayed) {
            var played = {
                actor: actor,
                success: success
            }                   ;
            moviesPlayed.push(played);   
            }
           
        },
        resetMoviesPlayed: function() {
          moviesPlayed = [];
        },
        getMoviesPlayed: function() {
            return moviesPlayed;
        },
        setActors: function (actors) {
            this.actors = actors;
        },
        getActors: function () {
            return this.actors;
        },
        setActor: function (actor) {
            this.actor = actor;
        },
        getActor: function (id) {
            for (var i = 0; i < this.actors.length; i++) {
                var aid = this.actors[i].id.toString();
                if (aid === id) {
                    return this.actors[i];
                }
            }
        },
        nextActor: function () {
            var index = this.actors.indexOf(this.actor);
            var nextItem;
            if (index >= 0 && index < this.actors.length - 1) {
                nextItem = this.actors[index + 1];
            }
            if(nextItem) {
                console.log("current actor index is:" + index + ", loading next actor, id is:" + nextItem ? nextItem.id: "null (no next actor)");
            } else {
                console.warn("there is no next actor")
            }
            return nextItem;
        }

    };
});

gameApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'partials/home.html',
                controller: 'HomeCtrl'
            }).
            when('/score', {
                templateUrl: 'partials/score.html',
                controller: 'ScoreCtrl'
            }).
            when('/pub/:currentId/:actorId', {
                templateUrl: 'partials/pub.html',
                controller: 'PubCtrl'
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
