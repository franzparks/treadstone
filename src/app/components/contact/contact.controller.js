(function() {
  'use strict';

  angular
    .module('treadstone')
    .controller('ContactController', ContactController);

  /** @ngInject */
  function ContactController($log) {
    var vm = this;

    vm.form_submitted = false;

    vm.message = { name : '', email : '', phone :'', message : ''};

    vm.submit = function(message){
      //$log.debug(' I was called!'+ Object.keys(user));
      vm.form_submitted = true;

    };


    //$log.debug(' Contact controller called');
}

})();
