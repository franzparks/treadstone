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
    vm.user = { option : 'Basic'};
    vm.moreInfo = false;

    //var geocoder = new google.maps.Geocoder();

    vm.signUp = function(){
      $location.url('/signup');
      $log.debug(' I was called!');
    };

    vm.getMoreInfo = function(){
      return vm.moreInfo;
    };

    //$log.debug(' Pricing controller called');
}

})();
