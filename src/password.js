angular.module('ngl.password', [])

.directive('nglPassword', function ($injector) {
  'use strict';

  var $timeout = $injector.get('$timeout');

  var controller = function ($attrs) {
    $timeout(function () {
      $attrs.$set('type', 'password');
    });
  };

  return {
    scope: true,
    controller: controller
  };
});
