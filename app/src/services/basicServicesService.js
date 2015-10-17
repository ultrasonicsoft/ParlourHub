(function () {
  'use strict';

  angular.module('users')
    .service('basicServicesService', ['$q', basicServicesService]);

  function basicServicesService($q) {
    var waxingServices = ['Upperlip', 'Chin', 'Forehead', 'Cheek', 'Sides', 'Full Face',
      'Under Arms', 'Half leg', 'Half Arms', 'Lower and Upper back', 'Full Back', 'Full Arms', 'Full Legs', 'Full Body'];

    var bleachServices = ['Upperlip','Face','Neck','Face and Neck','Face, Neck, Blouse Line','Full Arms','Half Arms','Half Legs','Feet','Under Arms','Stomach','Full'];
    var threadingServices = ['Eyebrows','Upperlip','Chin','Forehead','Cheek', 'Sides','Full Face'];
    
    // Promise-based API
    return {
      getWaxingServices: function () {
        // Simulate async nature of real remote calls
        return $q.when(waxingServices);
      },
          getBleachServices: function () {
        // Simulate async nature of real remote calls
        return $q.when(bleachServices);
      },
           getThreadingServices: function () {
        // Simulate async nature of real remote calls
        return $q.when(threadingServices);
      }
    };
  }

})();
