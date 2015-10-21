'use strict';
angular.module('users').controller('beautyTrainingCtrl',
        function (beautyTrainingService) {
                var self = this;
                self.beautyTrainingServices = [];

                beautyTrainingService.getBeautyTrainingServices()
                        .then(function (beautyTraining) {
                                self.beautyTrainingServices = [].concat(beautyTrainingService);
                        });
        });