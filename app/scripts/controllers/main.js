'use strict';

/**
 * @ngdoc function
 * @name whichSubApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the whichSubApp
 */
angular.module('whichSubApp')
  .controller('MainCtrl',['$scope', 'GGRedditService', function ($scope, GGRedditService) {
    GGRedditService.getRandomSub()
      .then(function(res) {
        $scope.data = res.data.data.children[0].data.subreddit;
      },function(error) {
        $scope.data = error;
      });
      
  }]);
