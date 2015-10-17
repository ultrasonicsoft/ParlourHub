'use strict';

/**********************************************************************
 * Angular Application
 **********************************************************************/
var app = angular.module('users', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/BasicService', {
        templateUrl: 'src/views/basic-service.html',
        controller:'basicServicesCtrl'
      })
      .when('/HairCare', {
        templateUrl: 'src/views/hair-care.html',
        controller:'hairCareCtrl'
      })
  });