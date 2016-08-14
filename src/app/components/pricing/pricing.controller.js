(function() {
  'use strict';

  angular
    .module('treadstone')
    .controller('PricingController', PricingController);

  /** @ngInject */
  function PricingController($log, pricingService) {
    var vm = this;

    vm.prices = [];
    vm.prices = pricingService.getPrices();

    //$log.debug(' Pricing controller called');
}

})();
