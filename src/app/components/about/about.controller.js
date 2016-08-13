(function() {
  'use strict';

  angular
    .module('treadstone')
    .controller('AboutCtrl', AboutCtrl);

  /** @ngInject */
  function AboutCtrl($log) {
    var vm = this;

    $log.debug(' About controller called');

})();
