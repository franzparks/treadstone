(function() {
  'use strict';

  angular
    .module('treadstone')
    .controller('404Ctrl', 404Ctrl);

  /** @ngInject */
  function 404Ctrl($log) {
    var vm = this;

    $log.debug(' 404 controller called');

})();
