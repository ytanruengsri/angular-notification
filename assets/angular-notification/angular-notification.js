/**
 * angular-notification v1.0
 *
 * Copyright (c) 2014 Yuthasak Tanruengsri yuthasak.tanruengsri@googlemail.com
 * https://github.com/ytanruengsri/angular-notification
 *
 * License: MIT
 */

'use strict';

angular.module('yNotificationModule', ['ngAnimate', 'yNotificationTemplateModule'])
    .constant('$tellMeConstant', {
        'defaultZIndex': 9999,
        'defaultPosition': 'top-right',
        'defaultSelfDestroyDuration': 3500
    })
    .factory('$tellMe', ['$timeout', '$tellMeConstant', function ($timeout, $tellMeConstant) {
        var messages = [];

        return {
            /* ============ GETTER FN ============*/
            getMessages: function() {
                return messages;
            },

            /* ============== NOTIFICATION FN ==============*/
            now: function(obj) {
                return this.createNotification(obj.level, obj.title, obj.message);
            },
            createNotification: function(level, title, message) {
                var tellMeNow = {
                    'level': level,
                    'title': title,
                    'message': message,
                    'created': Date.now()
                };

                var timeout = $timeout(function() {
                    messages.splice(messages.indexOf(tellMeNow), 1);
                }, $tellMeConstant.defaultSelfDestroyDuration);

                angular.extend(tellMeNow, {timer: timeout});

                messages.push(tellMeNow);

                return tellMeNow;
            }
        };
    }])
    .directive('tellMe', ['$timeout', '$tellMeConstant', '$tellMe',
        function($timeout, $tellMeConstant, $tellMe) {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    zIndex: '=',
                    position: '='
                },
                templateUrl: '../template/angular-notification-template.html',
                link: function(scope, elem) {
                    /* ============== Config ==============*/
                    var zIndex = angular.isDefined(scope.zIndex) ? scope.zIndex : $tellMeConstant.defaultZIndex;
                    elem.css('zIndex', zIndex);
                },
                controller: function($scope) {
                    $scope.messages = $tellMe.getMessages();

                    $scope.$on('clearTellMe', function() {
                        $scope.messages.splice(0, $scope.messages.length)
                    });

                    $scope.hideMessage = function(msg) {
                        $scope.messages.splice($scope.messages.indexOf(msg), 1);
                    };
                }
            };
        }]);