(function() {
  'use strict';

  angular
    .module('treadstone')
    .controller('ServicesCtrl', ServicesCtrl);

  /** @ngInject */
  function ServicesController($log) {
    var vm = this;

    $log.debug(' Services controller called');

})();
