/* global angular */
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
      
      .when('/BodyCare', {
        templateUrl: 'src/views/body-care.html',
        controller:'bodyCareCtrl'
      })
      .when('/BeautyTraining', {
        templateUrl: 'src/views/beauty-training.html',
        controller:'beautyTrainingCtrl'
      })
      .when('/BridalPackage', {
        templateUrl: 'src/views/bridal-package.html',
        controller:'bridalPackageCtrl'
      })
      
      .when('/CurrentOffers', {
        templateUrl: 'src/views/current-offers.html',
        controller:'currentOffersCtrl'
      })  
      
  }).directive('login', function() {
  return {
    templateUrl: './src/views/login.html'
  };
}).directive('dashboard', function() {
  return {
    templateUrl: './src/views/dashboard.html'
  };
});
  