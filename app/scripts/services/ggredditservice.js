'use strict';

/**
 * @ngdoc service
 * @name whichSubApp.GGRedditService
 * @description
 * # GGRedditService
 * Factory in the whichSubApp.
 */
angular.module('whichSubApp')
  .factory('GGRedditService', ['$http','_',function ($http, _) {      
    // res.data.data.children[0].data.subreddit;
    
    function getRandomSub() {
      return  $http.jsonp('http://www.reddit.com/r/random.json?jsonp=JSON_CALLBACK');
    }

    return {
      getRandomSub: function () {
        return getRandomSub();
      }
    };
  }]);
