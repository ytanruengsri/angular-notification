/**
 * angular-notification v1.0
 *
 * Copyright (c) 2014 Yuthasak Tanruengsri yuthasak.tanruengsri@googlemail.com
 * https://github.com/ytanruengsri/angular-notification
 *
 * License: MIT
 */

'use strict';

angular.module('yNotificationModule', ['ngAnimate'])
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
    .directive('ynot', ['$compile', '$document', '$timeout', 'ynotConst',
        function($compile, $document, $timeout, ynotConst) {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    zIndex: '=',
                    position: '=',
                    messages: '=',
                    interval: '=',
                    selfDestroyDuration: '='
                },
                templateUrl: 'template/angular-notification-template.html',
                link: function(scope, elem) {
                    elem.css('zIndex', scope.zIndex);

                    var templateElement = '<ynot-block></ynot-block>';

                    scope.$watchCollection('messages', function() {
                        if (angular.isDefined(scope.messages) && scope.messages.length > 0) {
                            elem.css(ynotConst[scope.position]);
                            showMessages(function() {
                                scope.messages = [];
                            });
                        }
                    });

                    function showMessages(callback) {
                        var idx = 0,
                            interval = setInterval(function() {
                                var message = scope.messages[idx++];
                                if (idx === scope.messages.length) {
                                    clearInterval(interval);
                                    callback();
                                }

                                createMessage(message);
                            }, scope.interval);
                    }

                    function createMessage(message) {
                        if (angular.isDefined(message)) {
                            var localScope = scope.$new(false);
                            localScope.level = message.level;
                            localScope.message = message.message;

                            var el = $compile(templateElement)(localScope);
                            elem.append(el);

                            $timeout(function() {
                                localScope.destroyed = true;

                                $timeout(function() {
                                    localScope.$destroy();
                                }, 700);
                            }, scope.selfDestroyDuration);
                        }
                    }
                }
            };
        }])
    .directive('ynotBlock', [
        function() {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'template/angular-notification-block-template.html',
                link: function(scope, elem) {
                    scope.destroyed = false;
                    scope.$on('$destroy', function() {
                        elem.remove();
                    });

                    scope.$watch('destroyed', function(newValue) {
                        if (newValue) {
                            elem.addClass('fadeout');
                        }
                    });
                }
            };
        }]);