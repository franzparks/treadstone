(function() {
  'use strict';

  angular
      .module('treadstone')
      .service('mainService', mainService);

  /** @ngInject */
  function mainService() {

    var featuredPortfolios = [
      { 
        'url': '../../assets/images/carlos.jpeg'
      },
      {
        'url' : '../../assets/images/marie.jpeg'
      },
      {
        'url':'../../assets/images/treadStone-grounds.jpeg'
      },
      {
        'url':'../../assets/images/tam-quan.jpeg'
      },
      {
        'url':'../../assets/images/old-soldier.jpeg'
      },
      {
        'url':'../../assets/images/wombosi.jpeg'
      }    
     
    ];

    var featuredArtists = [
      {
        'author': 'Alexander Conklin',
        'url': '../../assets/images/alex-conklin.jpeg',
        'description': 'One of the most wonderful paintings done during the days of treadstone\
                      and on and on....\
        '
      },

      {
        'author': 'David Webb',
        'url': '../../assets/images/Jason-Bourne-Medusa-Chameleon.jpeg',
        'description': 'One of the most wonderful paintings done during the days of treadstone\
                      and on and on....\
        '
      }
      
      
     
    ];

    this.getFeaturedPortfolios = getFeaturedPortfolios;
    this.getFeaturedArtists = getFeaturedArtists;

    function getFeaturedPortfolios() {
      return featuredPortfolios;
    }

    function getFeaturedArtists() {
      return featuredArtists;
    }
  }

})();
