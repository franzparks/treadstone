(function() {
  'use strict';

  angular
    .module('treadstone')
    .controller('ContactCtrl', ContactCtrl);

  /** @ngInject */
  function ContactController($log) {
    var vm = this;

    $log.debug(' Contact controller called');

})();
