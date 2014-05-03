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

## Example
**JS**
<pre>angular.module("demo", ["tellMeTemplate"])</pre>

**HTML**
<pre>&lt;tell-me position="examplePosition" z-index="9999">&lt;/tell-me></pre>

## License

Copyright (c) 2014 [Yuthasak Tanruengsri](mailto:yuthasak.tanruengsri@googlemail.com)

[MIT License](https://raw.githubusercontent.com/ytanruengsri/angular-notification/master/LICENSE)
