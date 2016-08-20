(function() {
  'use strict';

  angular
      .module('treadstone')
      .service('signUpService', signUpService);

  /** @ngInject */
  function signUpService() {
    
    var selected_option = '';

    this.getOption = getOption;
    this.selectOption = selectOption;

    function getOption() {
      return selected_option;
    }

    function selectOption(option){
      selected_option = option;
    }

  }

})();
