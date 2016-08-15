(function() {
  'use strict';

  angular
    .module('treadstone')
    .controller('BlogController', BlogController);

  /** @ngInject */
  function BlogController($log,blogService) {
    var vm = this;

    vm.blogs = [];
    vm.blogs = blogService.getBlogs();

    //$log.debug(' Blog controller called');
  }

})();
