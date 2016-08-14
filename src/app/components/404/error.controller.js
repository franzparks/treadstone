(function() {
  'use strict';

  angular
    .module('treadstone')
    .controller('ErrorController', ErrorController);

  /** @ngInject */
  function ErrorController($log) {
    //var vm = this;

    $log.debug(' 404 controller called');
}

})();
