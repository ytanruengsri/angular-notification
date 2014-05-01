angular-notification
====================
Angular directive show notification with pure CSS3

## Demo
* [Live Demo](http://ytanruengsri.github.io/angular-notification/)

## Getting Started
To get started you can simply clone the `angular-notification` repository and include following files:

Minified Version: **angular-notification.min.js**

Uncompressed Version: **angular-notification-template.js** and **angular-notification.js**

And

**angular-notification.css**

## Usages
**Attributes**
* `zIndex` Specifies the stack order of an element. (Default value: `9999`)
* `position` Specified the notification position `top-left`, `top-right`, `bottom-left`, `bottom-right` (Default value: `top-right` )
* `messages` Required attribute. Array of messages with the following format
    <pre>{level: 'info|success|error|warn', message: 'test message'}</pre>
* `interval` Delay time in ms for notification. (Default value: `300`)
* `selfDestroyDuration` Time in ms to destroy the notification after creation. (Default value: `2000`)

## License

Copyright (c) 2014 [Yuthasak Tanruengsri](mailto:yuthasak.tanruengsri@googlemail.com)

[MIT License](https://raw.githubusercontent.com/ytanruengsri/angular-notification/master/LICENSE)
