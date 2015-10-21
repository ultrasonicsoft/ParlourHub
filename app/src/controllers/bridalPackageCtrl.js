'use strict';
angular.module('users').controller('bridalPackageCtrl',
        function (bridalPackageService) {
                var self = this;
                self.bridalPackageServices = [];

                bridalPackageService.getBridalPackageServices()
                        .then(function (bridalPackage) {
                                self.bridalPackageServices = [].concat(bridalPackage);
                        });
        });