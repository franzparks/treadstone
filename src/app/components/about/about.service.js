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
        'title' : 'The C.E.O',
        'dept': 'The Company',
        'url':'../../assets/images/750_450.png'
      },
      {
        'name' : 'Francis Phiri',
        'title' : 'The C.T.O',
        'dept': 'Tech Gadgets Dept',
        'url':'../../assets/images/750_450.png'
      },
      {
        'name' : 'Brandon Scofield',
        'title' : 'The Artist',
        'dept': 'Art Dept',
        'url':'../../assets/images/750_450.png'
      },
      {
        'name' : 'Amanda Waller',
        'title' : 'The VIP',
        'dept': 'S Squad',
        'url':'../../assets/images/750_450.png'
      },
      {
        'name' : 'Jack Reacher',
        'title' : 'The Fixer',
        'dept': 'Marketing',
        'url':'../../assets/images/750_450.png'
      },
      {
        'name' : 'Vasili Taleniekov',
        'dept' : 'Clandestine Ops',
        'title':'FSB Liason',
        'url':'../../assets/images/750_450.png'

      }


    ];

    var customers = [
      {
        'url' : '../../assets/images/500_300.png'
      },
      {
        'url' : '../../assets/images/500_300.png'
      },
      {
        'url' : '../../assets/images/500_300.png'
      },
      {
        'url' : '../../assets/images/500_300.png'
      },
      {
        'url' : '../../assets/images/500_300.png'
      },
      {
        'url' : '../../assets/images/500_300.png'
      }

    ];

    var pageData = 
      {
        'url' : '../../assets/images/treadstone-property.jpeg',

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
