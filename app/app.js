'use strict';

angular.module("demo", ["ngRoute", "yNotificationModule"])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/app.html',
                controller: 'AngularNotificationDemoController'
            })
            .otherwise({redirectTo: '/'});
    })
    .controller("AngularNotificationDemoController", function($scope) {
        $scope.position = 'top-right';
        $scope.messages = [];

        $scope.changePosition = function(position) {
            console.log('change position to ' + position);
            $scope.position = position;
        };

        $scope.notify = function() {
            $scope.messages.push({
               level: 'info',
               message: 'some info message'
            });
            $scope.messages.push({
               level: 'error',
               message: 'some error message'
            });
            $scope.messages.push({
               level: 'warn',
               message: 'some warning message'
            });
            $scope.messages.push({
               level: 'success',
               message: 'some success message'
            });
        };
    });
