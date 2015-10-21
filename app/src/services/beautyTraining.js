(function () {
  'use strict';

  angular.module('users')
    .service('beautyTrainingService', ['$q', beautyTrainingService]);

  function beautyTrainingService($q) {
    var beautyTrainingServices = ['Basic Diploma Course','Advanced Diploma Beauty Courses','Advanced Hair Techniques Course','Spa Course','Mehandhi Course','Make-up Techniques','Others'
];

    // Promise-based API
    return {
      getBeautyTrainingServices: function () {
        // Simulate async nature of real remote calls
        return $q.when(beautyTrainingServices);
      }
    };
  }

})();
