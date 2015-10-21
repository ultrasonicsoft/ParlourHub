'use strict';
angular.module('users').controller('bodyCareCtrl',
        function (bodyCareService) {
                var self = this;
                self.bodyCareServices = [];

                bodyCareService.getBodyCareServices()
                        .then(function (bodyCare) {
                                self.bodyCareServices = [].concat(bodyCare);
                        });
        });