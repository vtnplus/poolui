'use strict';

angular.module('utils.strings', [])

.filter('toXMR', function() {
  return function(amount) {
    return amount / 100;
  };
})

.filter("convertedTime",function() {
return function(seconds) {
    var days = Math.floor(seconds/86400);
    var hours = Math.floor((seconds % 86400) / 3600);
    var mins = Math.floor(((seconds % 86400) % 3600) / 60);
    var secs = ((seconds % 86400) % 3600) % 60;
    return (days > 0 ? days+'d ' : '') + ('00'+hours).slice(-2) +':' + ('00'+mins).slice(-2)+':' + ('00'+secs).slice(-2);
    };
})

.filter('toHashRate', function() {
  return function(hashes) {
    if (hashes > 1000000) {
      return parseFloat((hashes / 1000000).toFixed(2)) + " MH/s"
    }
    if (hashes > 1000) {
      return parseFloat((hashes / 1000).toFixed(2)) + " KH/s"
    }
    return ( hashes || 0 ) + " H/s"
  };
})


.filter('hashToLink', function($sce) {
  return function(hash, type) {
    var str = (hash == undefined) ? 'none' : "<a class=\"md-body-2\" target=\"_new\" href=\"https://blockexplorer.electroneum.com/"+type+"/" + hash + "\">" + hash + "</a>";
    return $sce.trustAsHtml(str);
  };
})

.filter('difficultyToHashRate', function() {
  return function(hashrate) {
    return Math.floor(hashrate / 60)
  };



});

