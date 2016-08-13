(function() {
  'use strict';

  angular
    .module('treadstone')
    .controller('FaqCtrl', FaqCtrl);

  /** @ngInject */
  function FaqCtrl($log) {
    var vm = this;

    $log.debug(' Faq controller called');

})();
