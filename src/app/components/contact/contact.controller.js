(function() {
  'use strict';

  angular
    .module('treadstone')
    .controller('ContactCtrl', ContactCtrl);

  /** @ngInject */
  function ContactCtrl($log) {
    var vm = this;

    $log.debug(' Contact controller called');

})();
