(function() {
  'use strict';

  angular
    .module('treadstone')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
	navigator.serviceWorker.register('/sw.js');
	$log.debug('runBlock end');
  }

})();
