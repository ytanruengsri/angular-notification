angular.module('tellMeTemplate', ['../template/angular-notification-template.html']);

angular.module("../template/angular-notification-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../template/angular-notification-template.html",
    "<div class=\"y-notication {{position}}\">" +
          "<div class=\"y-notification-wrapper\" ng-repeat=\"msg in messages\" ng-click=\"hideMessage(msg)\">\n" +
          "     <div class=\"y-notification-msg {{msg.level}}\">\n" +
          "         <div class=\"y-notification-body\" style=\"padding: 10px 20px;\">\n" +
          "             <div class=\"y-notification-title\">{{msg.title}}</div>\n" +
          "             <div class=\"y-notification-message\">{{msg.message}}</div>\n" +
          "         </div>\n" +
          "     </div>\n" +
          "</div>" +
    "</div>");
}]);
