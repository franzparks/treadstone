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
        'url':'http://placehold.it/750x450'
      },
      {
        'name' : 'Francis Phiri',
        'title' : 'C.T.O',
        'dept': 'Tech Gadgets Dept',
        'url':'http://placehold.it/750x450'
      },
      {
        'name' : 'Brandon Scofield',
        'title' : 'Artist',
        'dept': 'Art Dept',
        'url':'http://placehold.it/750x450'
      },
      {
        'name' : 'Amanda Waller',
        'title' : 'The VIP',
        'dept': 'S Squad',
        'url':'http://placehold.it/750x450'
      },
      {
        'name' : 'Jack Reacher',
        'title' : 'Fixer',
        'dept': 'Marketing',
        'url':'http://placehold.it/750x450'
      },
      {
        'name' : 'Vasili Taleniekov',
        'dept' : 'Clandestine Ops',
        'title':'FSB Liason',
        'url':'http://placehold.it/750x450'

      },



    ];

    var customers = [
      {
        'url' : 'http://placehold.it/500x300'
      },
      {
        'url' : 'http://placehold.it/500x300'
      },
      {
        'url' : 'http://placehold.it/500x300'
      },
      {
        'url' : 'http://placehold.it/500x300'
      },
      {
        'url' : 'http://placehold.it/500x300'
      },
      {
        'url' : 'http://placehold.it/500x300'
      }

    ];


    this.getTeam = getTeam;
    this.getCustomers = getCustomers;

    function getTeam() {
      return team;
    }

    function getCustomers() {
      return customers;
    }
  }

})();
