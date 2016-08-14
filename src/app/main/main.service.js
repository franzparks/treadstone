(function() {
  'use strict';

  angular
      .module('treadstone')
      .service('mainService', mainService);

  /** @ngInject */
  function mainService() {
    var featuredPortfolios = [
      {
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      },
      
     
    ];

    var featuredArtists = [
      {
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      },
      
     
    ];

    this.getPortfolios = getPortfolios;
    this.getFeaturedArtists = getFeaturedArtists;

    function getPortfolios() {
      return featuredPortfolios;
    }

    function getFeaturedArtists() {
      return featuredArtists;
    }
  }

})();
