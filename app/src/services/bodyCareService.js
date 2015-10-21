(function () {
  'use strict';

  angular.module('users')
    .service('bodyCareService', ['$q', bodyCareService]);

  function bodyCareService($q) {
    var bodyCareServices = ['Aroma Body Massage','Body Polishing','Detoxification'
];

    // Promise-based API
    return {
      getBodyCareServices: function () {
        // Simulate async nature of real remote calls
        return $q.when(bodyCareServices);
      }
    };
  }

})();
