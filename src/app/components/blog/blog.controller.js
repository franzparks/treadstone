(function() {
  'use strict';

  angular
    .module('treadstone')
    .controller('BlogCtrl', BlogCtrl);

  /** @ngInject */
  function BlogController($log) {
    var vm = this;

    $log.debug(' Blog controller called');

})();
