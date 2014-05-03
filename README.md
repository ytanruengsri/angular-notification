angular-notification
====================
Angular directive for showing notifications with pure CSS3

## Demo
* [Live Demo](http://ytanruengsri.github.io/angular-notification/)

## Getting Started
To get started you can simply clone the `angular-notification` repository and include following files:

Minified Version: **angular-notification.min.js** OR

Uncompressed Version: **angular-notification-template.js** and **angular-notification.js**

And
Minified Version: **angular-notification.min.css** OR

Uncompressed Version: **angular-notification.css**

## Usages
**Attributes**
* `zIndex` Specifies the stack order of an element. (Default value: `9999`)
* `position` Specified the notification position `top-left`, `top-right`, `bottom-left`, `bottom-right` (Default value: `top-right` )
* `messages` Required attribute. Array of messages with the following format
    <pre>{level: 'info|success|error|warn', message: 'test message'}</pre>
* `interval` Delay time in ms for notification. (Default value: `300`)
* `selfDestroyDuration` Time in ms to destroy the notification after creation. (Default value: `2000`)

## Example
**JS**
<pre>angular.module("demo", ["yNotificationModule"])</pre>

**HTML**
<pre>&lt;ynot messages="exampleMessages" position="examplePosition" z-index="9999" interval="300" self-destroy-duration="2000">&lt;/ynot></pre>

## License

Copyright (c) 2014 [Yuthasak Tanruengsri](mailto:yuthasak.tanruengsri@googlemail.com)

[MIT License](https://raw.githubusercontent.com/ytanruengsri/angular-notification/master/LICENSE)
