(function() {
  'use strict';

  angular
    .module('treadstone')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, mainService) {
    var vm = this;

    vm.portfolios = [];
    vm.artists = [];
    
    vm.portfolios = mainService.getFeaturedPortfolios();
    vm.artists = mainService.getFeaturedArtists();

    //$log.debug('getFeaturedPortfolios : '+mainService.getFeaturedPortfolios() );
  }

})();
