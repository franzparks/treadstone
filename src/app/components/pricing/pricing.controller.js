(function() {
  'use strict';

  angular
    .module('treadstone')
    .controller('PricingController', PricingController);

  /** @ngInject */
  function PricingController($log) {
    //var vm = this;

    $log.debug(' Pricing controller called');
}

})();
