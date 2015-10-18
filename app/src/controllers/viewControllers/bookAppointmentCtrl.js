'use strict';
angular.module('users').controller('bookAppointmentCtrl',
  function (hairCareService, $mdDialog) {
    var self = this;
    self.cancel = cancel;
    self.bookAppointment = bookAppointment;
    self.hide = hide;
    self.bookingDate = new Date();
    self.bookingTime = new Date();

    function hide() {
      $mdDialog.hide();
    };
    function cancel() {
      $mdDialog.cancel();
    };

    function bookAppointment() {
      alert( self.bookingDate + ' : ' + self.bookingTime);
      self.hide();
    };
  });