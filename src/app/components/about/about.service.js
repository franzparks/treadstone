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

    var pageData = 
      {
        'url' : 'http://lorempixel.com/700/450/city/1/TreadStone-Property',

        'text' : 
        'hello'
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


/*
'Lid est laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis \ 
          dolores The Matarese Circle nemis omnis fugats \
          vitaes nemo minima rerums unsers sadips amets.. Sed ut perspiciatis unde omnis iste natus error sit \
          voluptatem accusantium doloremque laudantium, The Bourne Identity totam rem aperiam, \ 
          eaque ipsa quae ab illo inventore \
          veritatis et quasi architecto beatae The Bourne Supremacy vitae dicta sunt explicabo. Nemo enim ipsam \
          voluptatem quia \
          voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores The Bourne Ultimatum \
          eos qui ratione \
          voluptatem sequi nesciunt Angelus Domini.'
*/