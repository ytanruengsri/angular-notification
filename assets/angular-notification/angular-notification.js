/**
 * angular-notification v1.0
 *
 * Copyright (c) 2014 Yuthasak Tanruengsri yuthasak.tanruengsri@googlemail.com
 * https://github.com/ytanruengsri/angular-notification
 *
 * License: MIT
 */

'use strict';

angular.module('yNotificationModule', ['yNotificationTemplateModule'])
    .constant('ynotConst', {
        'defaultZIndex': 9999,
        'defaultPosition': 'top-right',
        'defaultInterval': 300,
        'defaultSelfDestroyDuration': 2000,
        'defaultDestroyAnimationDelay': 700,
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
                templateUrl: '../template/angular-notification-template.html',
                link: function(scope, elem) {
                    var zIndex = angular.isDefined(scope.zIndex) ? scope.zIndex : ynotConst.defaultZIndex;
                    var position = angular.isDefined(scope.position) ? scope.position : ynotConst.defaultPosition;
                    var interval = angular.isDefined(scope.interval) ? scope.interval : ynotConst.defaultInterval;
                    var destroyDuration = angular.isDefined(scope.selfDestroyDuration) ? scope.selfDestroyDuration : ynotConst.defaultDestroyAnimationDelay;

                    console.log('zIndex: ' + zIndex);
                    console.log('scope zIndex: ' + scope.zIndex);
                    console.log('position: ' + position);
                    console.log('scope position: ' +  scope.position);
                    console.log('interval: ' + interval);
                    console.log('scope interval: ' + scope.interval);
                    console.log('destroyDuration: ' + destroyDuration);
                    console.log('scope destroyDuration: ' + scope.selfDestroyDuration);

                    elem.css('zIndex', zIndex);

                    var templateElement = '<ynot-block></ynot-block>';

                    scope.$watchCollection('messages', function() {
                        if (angular.isDefined(scope.messages) && scope.messages.length > 0) {
                            elem.css(ynotConst[position]);
                            showMessages(function() {
                                scope.messages = [];
                            });
                        }
                    });

                    function showMessages(callback) {
                        var idx = 0,
                            intervalFn = setInterval(function() {
                                var message = scope.messages[idx++];
                                if (idx === scope.messages.length) {
                                    clearInterval(intervalFn);
                                    callback();
                                }

                                createMessage(message);
                            }, interval);
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
                                }, ynotConst.defaultDestroyAnimationDelay);
                            }, destroyDuration);
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
                templateUrl: '../template/angular-notification-block-template.html',
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