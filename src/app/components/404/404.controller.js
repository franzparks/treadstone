(function() {
  'use strict';

  angular
    .module('treadstone')
    .controller('404Ctrl', MainController);

  /** @ngInject */
  function 404Controller($log) {
    var vm = this;

    $log.debug(' 404 controller called');

})();
