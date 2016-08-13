(function() {
  'use strict';

  angular
    .module('treadstone')
    .controller('AboutCtrl', AboutCtrl);

  /** @ngInject */
  function AboutController($log) {
    var vm = this;

    $log.debug(' About controller called');

})();
