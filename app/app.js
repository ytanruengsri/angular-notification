'use strict';

angular.module("demo", ["ngRoute", "tellMeModule"])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/app.html',
                controller: 'AngularNotificationDemoController'
            })
            .otherwise({redirectTo: '/'});
    })
    .controller("AngularNotificationDemoController", ['$scope', '$tellMe', function($scope, $tellMe) {
        $scope.pos = 'top-right';

        $scope.tellMe = function(position) {
            $scope.pos = position;
            $tellMe.now({
                level: 'info',
                title: 'info title',
                message: 'some info message'
            });
            $tellMe.now({
                level: 'error',
                title: 'error title',
                message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            });
            $tellMe.now({
                level: 'warn',
                title: 'warning title',
                message: 'some warning message'
            });
            $tellMe.now({
                level: 'success',
                title: 'success title',
                message: 'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
            });
        };

        $scope.tellMeAtCenter = function() {
            $scope.pos = 'center';
            $tellMe.now({
                level: 'success',
                title: 'success title',
                message: 'Upload successful'
            });
        };

        $scope.clearMessages = function() {
            $scope.$broadcast('clearTellMe');
        }
    }]);
