(function(){
  'use strict';

  angular.module('users')
         .service('parlourService', ['$q', parlourService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function parlourService($q){
    var users = [
      {
        name: 'Basic Service',
        avatar: 'svg-1',
        url:'/BasicService'
       
      },
      {
        name: 'Hair Care',
        avatar: 'svg-2',
        url:'/HairCare'
      },
      {
        name: 'Body Care',
        avatar: 'svg-3',
        url:'/BodyCare'
      },
      {
        name: 'Beauty Training',
        avatar: 'svg-4',
        url:'/BeautyTraining'
      },
      {
        name: 'Bridal Package',
        avatar: 'svg-4',
        url:'/BridalPackage'
      },
      {
        name: 'Current Offers',
        avatar: 'svg-5',
        url:'/CurrentOffers'
      },
      {
        name: 'Contact Us',
        avatar: 'svg-6',
        url:'/Contact Us'
      },
      {
        name: 'My Profile',
        avatar: 'svg-6',
        url:'/MyProfile'
      }
    ];

    // Promise-based API
    return {
      loadAllUsers : function() {
        // Simulate async nature of real remote calls
        return $q.when(users);
      }
    };
  }

})();
