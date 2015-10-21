(function () {
  'use strict';

  angular.module('users')
    .service('bridalPackageService', ['$q', bridalPackageService]);

  function bridalPackageService($q) {
    var bridalPackageServices = ['Luxury Package','Majestic Package','Classic Package','Exotic Package'
];

    // Promise-based API
    return {
      getBridalPackageServices: function () {
        // Simulate async nature of real remote calls
        return $q.when(bridalPackageServices);
      }
    };
  }

})();
