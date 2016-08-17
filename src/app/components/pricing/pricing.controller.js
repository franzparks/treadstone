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
    };

    vm.getMoreInfo = function(){
      return vm.moreInfo;
    };

    vm.submit = function(user){
      $log.debug(' I was called!'+ Object.keys(user));

    };

    //$log.debug(' Pricing controller called');
}

})();
