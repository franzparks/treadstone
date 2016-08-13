(function() {
  'use strict';

  angular
    .module('treadstone')
    .controller('FaqCtrl', MainController);

  /** @ngInject */
  function FaqController($log) {
    var vm = this;

    $log.debug(' Faq controller called');

})();
