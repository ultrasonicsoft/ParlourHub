(function () {
  'use strict';

  angular.module('users')
    .service('hairCareService', ['$q', hairCareService]);

  function hairCareService($q) {
    var hairCareServices = ['Hair cut', 'Hair coloring', 'Head massage', 'Hair spa', 'Hair treatment', 'Hair Fall Treatment',
      'Anti Dandruff Treatment'];

    // Promise-based API
    return {
      getHairCareServices: function () {
        // Simulate async nature of real remote calls
        return $q.when(hairCareServices);
      }
    };
  }

})();
