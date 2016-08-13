(function() {
  'use strict';

  angular
    .module('treadstone')
    .controller('BlogCtrl', MainController);

  /** @ngInject */
  function BlogController($log) {
    var vm = this;

    $log.debug(' Blog controller called');

})();
