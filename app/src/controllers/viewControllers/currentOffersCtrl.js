'use strict';
angular.module('users').controller('currentOffersCtrl',
        function (currentOffersService) {
                var self = this;
                self.festivalOfferServices = [];
                self.birthdayOfferServices = [];
                

                currentOffersService.getFestivalOfferServices()
                        .then(function (festivalOffer) {
                                self.festivalOfferServices = [].concat(festivalOffer);
                        });

                currentOffersService.getBirthdayOfferServices()
                        .then(function (birthdayOffer) {
                                self.birthdayOfferServices = [].concat(birthdayOffer);
                        });

               
        });