'use strict';

/**********************************************************************
 * Angular Application
 **********************************************************************/
var app = angular.module('users', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
       .when('/BasicService', {
        templateUrl: 'src/views/basic-service.html'
      })      
  });