(function() {
  'use strict';

  angular
    .module('treadstone')
    .controller('BlogController', BlogController);

  /** @ngInject */
  function BlogController($log) {
    //var vm = this;

    $log.debug(' Blog controller called');
  }

})();
