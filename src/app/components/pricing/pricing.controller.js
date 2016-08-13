(function() {
  'use strict';

  angular
    .module('treadstone')
    .controller('PricingCtrl', PricingCtrl);

  /** @ngInject */
  function PricingController($log) {
    var vm = this;

    $log.debug(' Pricing controller called');

})();
