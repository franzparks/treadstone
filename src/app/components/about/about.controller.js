(function() {
  'use strict';

  angular
    .module('treadstone')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController($log, aboutUsService) {
    var vm = this;

    vm.team = [];
    vm.customers = [];

    vm.team = aboutUsService.getTeam();
    vm.customers = aboutUsService.getCustomers();

    //$log.debug(' About controller called');
}

})();
