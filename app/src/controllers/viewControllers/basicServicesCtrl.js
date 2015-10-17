'use strict';
angular.module('users').controller('basicServicesCtrl',
        function (basicServicesService) {
                var self = this;
                self.waxingServices = [];
                self.bleachServices = [];
                self.threadingServices = [];

                basicServicesService.getWaxingServices()
                        .then(function (waxing) {
                                self.waxingServices = [].concat(waxing);
                        });

                basicServicesService.getBleachServices()
                        .then(function (bleach) {
                                self.bleachServices = [].concat(bleach);
                        });

                basicServicesService.getThreadingServices()
                        .then(function (threading) {
                                self.threadingServices = [].concat(threading);
                        });
        });