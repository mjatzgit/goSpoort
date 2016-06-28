//var app = angular.module('egerbyg', ['ui.bootstrap', 'duScroll', 'mgcrea.jquery','mgcrea.bootstrap.affix'] );

'use strict';
/**********************************************************************
 * Angular Application
 **********************************************************************/
var app = angular.module('gospoort', [

    // imported Dependencies - - - - 
    'ngAnimate',
    'ui.bootstrap',
    //'ui.router',
    'ngSanitize',
 

    //** gospoort ***//
    // Controllers
    'FilterController',
    
]).config(function($httpProvider) {
   

}).run(function($rootScope, $http, $location ){
   
    
}).controller('MainCtrl', function ( $scope ) {
    console.log('safgfsd');
});

