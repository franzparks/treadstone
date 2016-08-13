(function() {
  'use strict';

  angular
    .module('treadstone')
    .controller('ContactController', ContactController);

  /** @ngInject */
  function ContactController($log) {
    //var vm = this;

    $log.debug(' Contact controller called');
}

})();
