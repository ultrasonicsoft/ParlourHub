'use strict';
angular.module('users').controller('bookAppointmentCtrl',
        function (hairCareService) {
                var self = this;
                self.hairCareServices = [];

                hairCareService.getHairCareServices()
                        .then(function (hairCare) {
                                self.hairCareServices = [].concat(hairCare);
                        });
        });