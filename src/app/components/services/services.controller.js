(function() {
  'use strict';

  angular
    .module('treadstone')
    .controller('ServicesController', ServicesController);

  /** @ngInject */
  function ServicesController($log) {
    //var vm = this;

    $log.debug(' Services controller called');
}

})();
