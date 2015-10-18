(function(){
  'use strict';

  angular.module('users')
         .service('appContextService', ['$q', appContextService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function appContextService($q){
    var selectedService = 
      {
        name: '',
        avatar: '',
        url:''
      };

    // Promise-based API
    return {
      getselectedService : function() {
        // Simulate async nature of real remote calls
        return selectedService;
      },
       setselectedService : function(newService) {
        // Simulate async nature of real remote calls
        selectedService = newService;
      }
    };
  }

})();
