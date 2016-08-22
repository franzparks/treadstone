(function() {
  'use strict';

  angular
    .module('treadstone')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
	//navigator.serviceWorker.register('/app/sw.js');

	$log.debug('runBlock end');
  }

})();
