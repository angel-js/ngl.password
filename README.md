ngl.password
============

Angular 1.x directive for preventing the "remember password" dialog

Usage
-----

```html
<form ng-submit="login(user)">
  <input type="text" ng-model="user.name" />
  <input ngl-password ng-model="user.password" />
</div>
```

`<ngl-password>` changes the type of the input to password on the next tick
after DOM is ready, so the browser cannot detect it as password. Its a
replacement to `type="password"` attribute

Install
-------

    bower install ngl.password

Include the sources

```html
<script src="bower_components/ngl.password/src/password.js"></script>
```

Add `ngl.password` to your app dependencies

```js
angular.module('app', [
  'ngl.password'
]);
```

How to reproduce "remember password" dialog
-------------------------------------------

### Firefox

 1. Fill the fields and click on the "login" button

### Chrome

 1. Fill the fields and click on the "login" button
 2. Refresh the page

Events causing form submission
------------------------------

  * Pressing enter in a text field
  * Pressing space or enter in an input or button with `type=submit`
  * Clicking a button or input with `type=submit`

References
----------

  * <http://stackoverflow.com/questions/32369/disable-browser-save-password-functionality>
  * <https://github.com/angular/angular.js/issues/2513#issuecomment-29454622>
  * <https://github.com/mcpDESIGNS/ngForm-handle-Enter-Keypress/blob/master/ngFormFixes.directive.js>
