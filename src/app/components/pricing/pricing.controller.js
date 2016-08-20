(function() {
  'use strict';

  angular
    .module('treadstone')
    .controller('PricingController', PricingController);

  /** @ngInject */
  function PricingController($log,$location, pricingService, signUpService) {
    var vm = this;

    vm.prices = [];
    vm.prices = pricingService.getPrices();
    vm.option = 'Basic';
    vm.user = {};
    vm.moreInfo = false;
    vm.form_submitted = false;


    vm.signUp = function(option){
      vm.option = option;
      signUpService.selectOption(option);
      $location.url('/signup');
      $log.debug(vm.option);
      
    };

}

})();
