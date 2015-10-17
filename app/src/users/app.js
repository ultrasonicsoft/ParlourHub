'use strict';

/**********************************************************************
 * Angular Application
 **********************************************************************/
var app = angular.module('users', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {

    //================================================
    // Define all the routes
    //================================================
    $routeProvider
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html'
      })
      .when('/login', {
        templateUrl: 'views/login.html'

      })
      .otherwise({
        redirectTo: '/'
      });
    //================================================
  });