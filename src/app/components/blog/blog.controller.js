(function() {
  'use strict';

  angular
    .module('treadstone')
    .controller('BlogController', BlogController);

  /** @ngInject */
  function BlogController($log,blogService) {
    //var vm = this;

    $log.debug(' Blog controller called');
  }

})();
