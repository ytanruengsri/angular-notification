'use strict';

angular.module("demo", ["ngRoute", "yNotificationModule"])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'assets/demo.html',
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
            console.log('notify ...');
            $scope.messages.push({
               level: 'info',
               title: 'info-level',
               message: 'some info message'
            });
            $scope.messages.push({
               level: 'error',
               title: 'error-level',
               message: 'some error message'
            });
            $scope.messages.push({
               level: 'warn',
               title: 'warn-level',
               message: 'some warning message'
            });
            $scope.messages.push({
               level: 'success',
               title: 'success-level',
               message: 'some success message'
            });
        };
    });
