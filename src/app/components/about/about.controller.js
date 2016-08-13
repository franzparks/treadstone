(function() {
  'use strict';

  angular
    .module('treadstone')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController($log) {
    //svar vm = this;

    $log.debug(' About controller called');
}

})();
