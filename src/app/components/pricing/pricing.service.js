(function() {
  'use strict';

  angular
      .module('treadstone')
      .service('pricingService', pricingService);

  /** @ngInject */
  function pricingService() {
    var data = [
      {
        'type' : 'Basic',
        'price': '$19',
        'price_cents':'99',
        'price_month':'mo.',
        'paintings' : '5 Paintings',
        'storage':'5 GB of Storage For Images',
        'transportation':'No Transportation',
        'guarantee':'No Guarantee'
      },
      {
        'type' : 'Plus',
        'price': '$39',
        'price_cents':'99',
        'price_month':'mo.',
        'paintings' : '10 Paintings',
        'storage':'10 GB of Storage For Images',
        'transportation':'Free Transportation For Paintings',
        'guarantee':'1 Year Guarantee'
      },
      {
        'type' : 'Premium Best Value!',
        'price': '$49',
        'price_cents':'99',
        'price_month':'mo.',
        'paintings' : '10 Paintings',
        'storage':'50 GB of Storage For Images',
        'transportation':'Free Transportation For Paintings',
        'guarantee':'2 Year Guarantee'
      },{
        'type' : 'Ultimate',
        'price': '$99',
        'price_cents':'99',
        'price_month':'mo.',
        'paintings' : '50 Paintings',
        'storage':'150 GB of Storage',
        'transportation':'Free Transportation For Paintings',
        'guarantee':'Unlimited Warranty'
      }

    ];

    this.getPrices = getPrices;

    function getPrices() {
      return data;
    }
  }

})();
