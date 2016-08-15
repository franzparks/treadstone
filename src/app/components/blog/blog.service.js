(function() {
  'use strict';

  angular
      .module('treadstone')
      .service('blogService', blogService);

  /** @ngInject */
  function blogService() {
    var blogs = [
      {
        'id' : '1',
        'date' : 'Aug 13, 2016'
        'title' : 'The movie adaptation',
        'text': 'This is a very basic project about the movie and how it was made.',
        'url':'http://placehold.it/600x300',
        'author' : 'Paul Greengrass'
      },
      {
        'id' : '2',
        'date' : 'May 24, 2015'
        'title' : 'A Blog about the new book series',
        'text': 'This is a blog about the new series which is under development but will use Ludlum\'s name.',
        'url':'http://placehold.it/600x300',
        'author' : 'Anonymous'
      },
      {
        'id' : '2',
        'date' : 'May 10, 2014'
        'title' : 'What is the Matarese Circle and where are they ?',
        'text': 'This is a very basic blog about nothing.',
        'url':'http://placehold.it/600x300',
        'author' : 'Some Fan in Vladivastok'
      }
      
    ];
  
    this.getBlogs = getBlogs;
  
    function getBlogs() {
      return blogs;
    }

  }

})();
