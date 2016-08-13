(function() {
  'use strict';

  angular
    .module('treadstone')
    .controller('PricingCtrl', PricingCtrl);

  /** @ngInject */
  function PricingCtrl($log) {
    var vm = this;

    $log.debug(' Pricing controller called');

})();
