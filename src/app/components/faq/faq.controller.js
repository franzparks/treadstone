(function() {
  'use strict';

  angular
    .module('treadstone')
    .controller('FaqController', FaqController);

  /** @ngInject */
  function FaqController($log, faqQuestionsService) {
    var vm = this;
    vm.questions = [];
    vm.questions = faqQuestionsService.getFaqQuestions();

    //$log.debug(' Faq controller called');
}

})();
