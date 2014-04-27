/**
 * angular-notification v1.0
 *
 * Copyright (c) 2014 Yuthasak Tanruengsri yuthasak.tanruengsri@googlemail.com
 * https://github.com/ytanruengsri/angular-notification
 *
 * License: MIT
 */

'use strict';

angular.module('yNotificationModule', [])
    .constant('ynotConst', {
        'top-left': {
            top: '20px',
            left: '20px'
        },
        'top-right': {
            top: '20px',
            right: '20px'
        },
        'bottom-left': {
            bottom: '20px',
            left: '20px'
        },
        'bottom-right': {
            bottom: '20px',
            right: '20px'
        }
    })
    .animation('.y-notification-msg', function() {
        return {
            removeClass: function(ele, className, done) {
                if (className === 'ng-hide') {
                    console.log('showing the element');
                } else { done(); }
            },
            addClass: function(ele, className, done) {
                if (className === 'ng-hide') {
                    console.log('hiding the element');
                } else { done(); }
            }
        }
    })
    .directive('ynot', ['$compile', '$document', '$timeout', 'ynotConst',
        function($compile, $document, $timeout, ynotConst) {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    position: '=',
                    messages: '=',
                    interval: '='
                },
                templateUrl: '../template/angular-notification-template.html',
                link: function(scope, elem) {
                    var templateElement = '<ynot-block></ynot-block>';

                    scope.$watchCollection('messages', function() {
                        if (angular.isDefined(scope.messages) && scope.messages.length > 0) {
                            // var clientWidth = $document[0].body.clientWidth;
                            // var clientHeight =$document[0].body.clientHeight;

                            elem.css(ynotConst[scope.position]);

                            angular.forEach(scope.messages, function (message) {
                                if (angular.isDefined(message)) {
                                    var localScope = scope.$new(false);
                                    localScope.level = message.level;
                                    localScope.message = message.message;

                                    var el = $compile(templateElement)(localScope);
                                    elem.append(el);

                                    $timeout(function() {
                                        localScope.$destroy();
                                    }, scope.interval);
                                }
                            });

                            scope.messages = [];
                        }
                    });
                }
            };
        }])
    .directive('ynotBlock', [
        function() {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '../template/angular-notification-block-template.html',
                link: function(scope, elem) {
                    scope.$on('$destroy', function() {
                        elem.remove();
                    });
                }
            };
        }]);