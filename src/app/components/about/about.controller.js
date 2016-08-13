(function() {
  'use strict';

  angular
    .module('treadstone')
    .controller('AboutCtrl', MainController);

  /** @ngInject */
  function AboutController($log) {
    var vm = this;

    $log.debug(' About controller called');

})();
