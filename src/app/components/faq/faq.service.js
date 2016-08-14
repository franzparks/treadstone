(function() {
  'use strict';

  angular
      .module('treadstone')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
      {
        'id' : 'collapseOne',
        'question' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        'answer' : 
        'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad \
        squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa \
        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid \
        single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft \
        beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice\
        lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you\
        probably haven\'t heard of them accusamus labore sustainable VHS.'
      },
      {
        'id':'collapseTwo',
        'question' : 'Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis\
                  vitae at risus?',
        'answer' : 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad\
                squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa\
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid\
                single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft\
                beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice\
                lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you\
                probably haven\'t heard of them accusamus labore sustainable VHS.'

      },
      {
        'id':'collapseThree',
        'question' : 'Aenean consequat lorem ut felis ullamcorper?',
        'answer' : 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad\
                squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa\
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid\
                single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft\
                beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice\
                lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you\
                probably haven\'t heard of them accusamus labore sustainable VHS.'
      },
      {
        'id':'collapseFour',
        'question' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        'answer' : 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad\
                squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa\
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid\
                single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft\
                beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice\
                lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you\
                probably haven\'t heard of them accusamus labore sustainable VHS.'

      },
      {
        'id':'collapseFive',
        'question' : 'Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis\
                                vitae at risus?',
        'answer' : 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad\
                squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa\
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid\
                single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft\
                beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice\
                lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you\
                probably haven\'t heard of them accusamus labore sustainable VHS.'
      },
      {
        'id':'collapseSix',
        'question' : 'Aenean consequat lorem ut felis ullamcorper?',
        'answer' : 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad\
                squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa\
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid\
                single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft\
                beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice\
                lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you\
                probably haven\'t heard of them accusamus labore sustainable VHS.'

      },
      {
        'id':'collapseSeven',
        'question' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit? Why did they kill Marie in the Greengrass movie?',
        'answer' : 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad\
                squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa\
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid\
                single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft\
                beer labore wes anderson cred nesciunt sapiente ea proident.\
                Where is Doctor Panov ? Ad vegan excepteur butcher vice\
                lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you\
                probably haven\'t heard of them accusamus labore sustainable VHS.'

      },
      {
        'id':'collapseEight',
        'question' : 'Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis\
                                vitae at risus?',
        'answer' : 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad\
                squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa\
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid\
                single-origin coffee nulla assumenda shoreditch et. \
                Nihil anim Why does Carlos the Jackal employ old men as his soldiers? keffiyeh helvetica, craft\
                beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice\
                lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you\
                probably haven\'t heard of them accusamus labore sustainable VHS.'

      },
      {
        'id':'collapseNine',
        'question' : 'Aenean consequat lorem ut felis ullamcorper?',
        'answer' : 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad\
                    squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa\
                    nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid\
                    single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft\
                    beer labore wes anderson cred nesciunt sapiente ea proident. \
                    What does Angelus Domini mean? Ad vegan excepteur butcher vice\
                    lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you\
                    probably haven\'t heard of them accusamus labore sustainable VHS.'

      }


    ];

    this.getTec = getTec;

    function getFaqQuestions() {
      return data;
    }
  }

})();
