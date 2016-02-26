ngl.password
============

Angular 1.x directive for preventing the "remember password" dialog

DEPRECATED
----------

This method do not work in firefox 43. Use <https://github.com/angel-js/ngl.form> instead

Usage
-----

Its a replacement for the `type="password"` attribute

```html
<form ng-submit="login(user)">
  <input type="text" ng-model="user.name" />
  <input ngl-password ng-model="user.password" />
</form>
```

`<ngl-password>` changes the type of the input to password on the next tick
after DOM is ready, so the browser cannot detect it as a password field.
This prevents the browser from showing the "remember password" dialog which
could lead to security issues in some scenarios.

More information in this stackoverflow threat:
<http://stackoverflow.com/questions/32369/disable-browser-save-password-functionality>

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
