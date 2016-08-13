(function() {
  'use strict';

  angular
    .module('treadstone')
    .controller('ContactCtrl', MainController);

  /** @ngInject */
  function ContactController($log) {
    var vm = this;

    $log.debug(' Contact controller called');

})();
