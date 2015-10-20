'use strict';
angular.module('users').controller('registerCtrl',
  function (appContextService, $mdDialog) {
    var self = this;
    self.cancel = cancel;
    self.hide = hide;
    self.registerNewUser = registerNewUser;

    function hide() {
      $mdDialog.hide();
    };
    function cancel() {
      $mdDialog.cancel();
    };

    function registerNewUser() {
      alert('Thanks you for registration');
      self.hide();
    };
  });