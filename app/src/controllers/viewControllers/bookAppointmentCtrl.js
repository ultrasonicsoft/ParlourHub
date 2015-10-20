'use strict';
angular.module('users').controller('bookAppointmentCtrl',
  function (hairCareService,appContextService, $mdDialog) {
    var self = this;
    self.cancel = cancel;
    self.bookAppointment = bookAppointment;
    self.hide = hide;
    self.bookingDate = new Date();
    self.bookingTime = new Date();
    
    self.selectedUser = appContextService.getselectedService();

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