(function() {
  'use strict';

  angular
    .module('novabeauty')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
