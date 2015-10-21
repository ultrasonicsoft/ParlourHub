(function () {
  'use strict';

  angular.module('users')
    .service('currentOffersService', ['$q', currentOffersService]);

  function currentOffersService($q) {
    var festivalOfferServices = ['40% OFF any services', 'Minimum 20% OFF on the Best Beauty Brands.'];
   
    
    var birthdayOfferServices = ['20% OFF Facial or Waxing.','Get Parlour Hub Rs. 2500 worth Beauty Services Rs. 1449.',];
    
    
    // Promise-based API
    return {
      getFestivalOfferServices: function () {
        // Simulate async nature of real remote calls
        return $q.when(festivalOfferServices);
      },
          getBirthdayOfferServices: function () {
        // Simulate async nature of real remote calls
        return $q.when(birthdayOfferServices);
      
      }
    };
  }

})();
