(function() {
  'use strict';

  angular
    .module('treadstone')
    .controller('FaqController', FaqController);

  /** @ngInject */
  function FaqController($log) {
    //var vm = this;

    $log.debug(' Faq controller called');
}

})();
