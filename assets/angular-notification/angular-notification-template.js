angular.module('yNotificationTemplateModule', ['../template/angular-notification-block-template.html', '../template/angular-notification-template.html']);

angular.module("../template/angular-notification-block-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../template/angular-notification-block-template.html",
    "<div class=\"y-notification-msg {{level}}\">\n" +
    "    <div class=\"y-notification-body\" style=\"padding: 10px 20px;\">\n" +
    "        <div class=\"y-notification-title\">{{title}}</div>\n" +
    "        <div class=\"y-notification-message\">{{message}}</div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("../template/angular-notification-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../template/angular-notification-template.html",
    "<div class=\"y-notication {{position}}\"></div>");
}]);
