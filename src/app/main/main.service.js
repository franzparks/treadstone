(function() {
  'use strict';

  angular
      .module('treadstone')
      .service('mainService', mainService);

  /** @ngInject */
  function mainService() {

    var featuredPortfolios = [
      { 
        'url': 'http://lorempixel.com/700/450/abstract/8/Carlos-The-Jackal'
      },
      {
        'url' : 'http://lorempixel.com/700/450/fashion/6/Marie'
      },
      {
        'url':'http://lorempixel.com/700/450/nature/4/TreadStone-Grounds'
      },
      {
        'url':'http://lorempixel.com/700/450/nature/2/Tam-Quan'
      },
      {
        'url':'http://lorempixel.com/700/450/people/3/Carlos-Old-Soldiers'
      },
      {
        'url':'http://lorempixel.com/700/450/abstract/6/Wombosi'
      }    
     
    ];

    var featuredArtists = [
      {
        'author': 'Alexander Conklin',
        'url': 'http://lorempixel.com/700/450/abstract/5/Alex-Conklin',
        'description': 'One of the most wonderful paintings done during the days of treadstone\
                      and on and on....\
        ',
      },

      {
        'author': 'David Webb',
        'url': 'http://lorempixel.com/700/450/abstract/1/Jason-Bourne-Medusa-Chameleon',
        'description': 'One of the most wonderful paintings done during the days of treadstone\
                      and on and on....\
        ',
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
