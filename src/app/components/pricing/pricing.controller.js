(function() {
  'use strict';

  angular
    .module('treadstone')
    .controller('PricingController', PricingController);

  /** @ngInject */
  function PricingController($log,$location, pricingService) {
    var vm = this;

    vm.prices = [];
    vm.prices = pricingService.getPrices();

    vm.signUp = function(){
      $location.url('/signup');
      $log.debug(' I was called!');
    };

    //$log.debug(' Pricing controller called');
}

})();
