  'use strict';

  /* Controllers */

  var gameControllers = angular.module('gameControllers', []);

  gameControllers.controller('HomeCtrl', ['$scope', 'service', '$http',
    function($scope, service, $http) {
      $http.get('actors/actors.json').success(function(data) {
        $scope.actors = data;
        service.setActors(data);
        console.log("actors:" + service.getActors());
        $scope.actor = service.getActors()[0];
      });
    }]);

  gameControllers.controller('PlayCtrl', ['$scope', 'service', '$document', '$location', '$routeParams', '$http',
    function($scope, service, $document, $location, $routeParams, $http) {

      $scope.actor = service.getActor($routeParams.actorId);
      var next = service.nextActor();
      var nextid;
      console.log("next actor is:" + next);
      if(next) {
        nextid = next.id;
      } else {
        console.info("no more actors");
        // todo play range must lead to home
      }

      $document.ready(function(){
        console.log("ready play");
        $("#playrange").on("input", function(e) {
          var val = e.currentTarget.value;
          if(val === "1") {
            if(nextid) {
              clearInterval(counter);
              console.log("will jump game master to:" + nextid);              
              $location.path("/actors/" + nextid);              
            } else {
              $location.path("/score/");
            }
            $scope.$apply();
          }
        });

        var counter;
        var count = 30;
        var timer = function()
        {
          count=count-1;
          if (count <= 0)
          {
           clearInterval(counter);
           // alert("timer");
           // failure, todo back to game master
           if(nextid) {
            console.log("will jump game master to:" + nextid);
            //$location.path("/actors/" + nextid);
            $scope.$apply();
           }
         }
      document.getElementById("timer").innerHTML=count + " secs"; // watch for spelling
    }
    counter=setInterval(timer, 1000);
  });

    }]);

  gameControllers.controller('ActorCtrl', ['$scope', 'service', '$document', '$location', '$routeParams', '$http',
    function($scope, service, $document, $location, $routeParams, $http) {

      console.log("actor wanted:" + $routeParams.actorId);
      $scope.actor = service.getActor($routeParams.actorId);
      service.setActor($scope.actor);

      $document.ready(function(){
        console.log("ready actor" + service);
        $("#actorrange").on("input", function(e) {
          var val = e.currentTarget.value;
          if(val === "1") {
            $location.path("/play/" + $scope.actor.id);
            $scope.$apply();
          }
        });

        $("#photo").on('click', function() {
          console.log("click" + $scope.actor.id);
        });

      })

      /*
      $http.get('actors/' + $routeParams.actorId + '.json').success(function(data) {
        $scope.actor = data;
        service.setActor(data);
      });
      */

    }]);
