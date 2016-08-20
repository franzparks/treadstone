(function() {
  'use strict';

  angular
      .module('treadstone')
      .service('aboutUsService', aboutUsService);

  /** @ngInject */
  function aboutUsService() {
    var team = [
      {
        'name' : 'Robert Ludlum',
        'title' : 'C.E.O',
        'dept': 'The Company',
        'url':'https://placehold.it/750x450'
      },
      {
        'name' : 'Francis Phiri',
        'title' : 'C.T.O',
        'dept': 'Tech Gadgets Dept',
        'url':'https://placehold.it/750x450'
      },
      {
        'name' : 'Brandon Scofield',
        'title' : 'Artist',
        'dept': 'Art Dept',
        'url':'https://placehold.it/750x450'
      },
      {
        'name' : 'Amanda Waller',
        'title' : 'The VIP',
        'dept': 'S Squad',
        'url':'https://placehold.it/750x450'
      },
      {
        'name' : 'Jack Reacher',
        'title' : 'Fixer',
        'dept': 'Marketing',
        'url':'https://placehold.it/750x450'
      },
      {
        'name' : 'Vasili Taleniekov',
        'dept' : 'Clandestine Ops',
        'title':'FSB Liason',
        'url':'https://placehold.it/750x450'

      }


    ];

    var customers = [
      {
        'url' : 'https://placehold.it/500x300'
      },
      {
        'url' : 'https://placehold.it/500x300'
      },
      {
        'url' : 'https://placehold.it/500x300'
      },
      {
        'url' : 'https://placehold.it/500x300'
      },
      {
        'url' : 'https://placehold.it/500x300'
      },
      {
        'url' : 'https://placehold.it/500x300'
      }

    ];

    var pageData = 
      {
        'url' : '../../assets/images/treadStone-property.jpeg',

        'text' : 
          'The Matarese Circle nemis omnis Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad \
          squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa \
          nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid \
          single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft \
          beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice\
          lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you\
          probably haven\'t heard of them accusamus labore sustainable VHS.'
      };
    
    


    this.getTeam = getTeam;
    this.getCustomers = getCustomers;
    this.getPageData = getPageData;

    function getTeam() {
      return team;
    }

    function getCustomers() {
      return customers;
    }

    function getPageData() {
      return pageData;
    }
  }

})();
