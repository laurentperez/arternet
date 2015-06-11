'use strict';

/* Controllers */

var gameControllers = angular.module('gameControllers', []);

gameControllers.controller('HomeCtrl', ['$scope', 'service', '$http',
    function ($scope, service, $http) {
        $http.get('actors/actors.json').success(function (data) {
            $scope.actors = data;
            service.setActors(data);
            console.log("actors:" + service.getActors());
            service.resetMoviesPlayed();
            var actors = service.getActors();
            var firstActor = actors[0];
            $scope.actor = firstActor;
        });
    }]);

gameControllers.controller('ActorCtrl', ['$scope', 'service', '$document', '$location', '$routeParams', '$http',
    function ($scope, service, $document, $location, $routeParams, $http) {

        console.log("loading actor from id:" + $routeParams.actorId);
        var actor = service.getActor($routeParams.actorId);
        $scope.actor = actor;
        service.setActor($scope.actor);

        $document.ready(function () {
            console.log("(dom) ready actor" + service);
            $("#actorrange").on("input", function (e) {
                var val = e.currentTarget.value;
                if (val === "1") {
                    $location.path("/play/" + $scope.actor.id);
                    $scope.$apply();
                }
            });

            $("#photo").on('click', function () {
                console.log("click" + $scope.actor.id);
            });

        })
    }]);

gameControllers.controller('PubCtrl',
    ['$scope', 'service', '$http', '$routeParams',
        function ($scope, service, $http, $routeParams) {
            var current = $routeParams.currentId;
            var nextid = $routeParams.actorId;
            $scope.actor = service.getActor($routeParams.currentId);
            $scope.nextActor = service.getActor($routeParams.actorId);

            console.log("on pub with:" + current + "/" + nextid);
        }
    ]);

gameControllers.controller('ScoreCtrl',
    ['$scope', 'service', '$http', '$routeParams',
        function ($scope, service, $http, $routeParams) {
            $scope.moviesPlayed = service.getMoviesPlayed();
        }
    ]);

function goToScore(location, scope) {
    location.path("/score/");
    scope.$apply();
}

function goToPub(location, scope) {
    console.log("(goToPub) will jump to pub:" + scope.actor.id + "/" + scope.nextid);
    location.path("/pub/" + scope.actor.id + "/" + scope.nextid);
    scope.$apply();
}

gameControllers.controller('PlayCtrl', ['$scope', 'service', '$document', '$location', '$routeParams', '$http',
    function ($scope, service, $document, $location, $routeParams, $http) {

        var actor = service.getActor($routeParams.actorId);
        $scope.actor = actor;
        var nextActor = service.nextActor();
        var nextid;
        if (nextActor) {
            nextid = nextActor.id;
            $scope.nextid = nextid;
        } else {
            console.warn("no next actor available");
        }

        $document.ready(function () {
            console.log("(dom) ready play");
            var counter;
            var count = 10;
            $("#playrange").on("input", function (e) {
                var val = e.currentTarget.value;
                // guess OK
                if (val === "1") {
                    clearInterval(counter);
                    service.updateMoviePlayed(actor, true);
                    if (nextid) {
                        goToPub($location, $scope);
                        return;
                    } else {
                        console.log("no more actor, back to score");
                        $location.path("/score/");
                        goToScore($location, $scope);
                    }
                }
            });


            var timer = function () {
                count = count - 1;
                if (count <= 0) {
                    clearInterval(counter);
                    // guess KO
                    // we have a failure to guess, go back to pub
                    service.updateMoviePlayed(actor, false);
                    if (nextid) {
                        goToPub($location, $scope);
                        return;
                    } else {
                        console.log("no more actor, back to score");
                        goToScore($location, $scope);
                    }
                }
                if (document.getElementById("timer")) {
                    document.getElementById("timer").innerHTML = count + " secs"; // watch for spelling
                }
            }
            counter = setInterval(timer, 1000);
        });

    }]);


