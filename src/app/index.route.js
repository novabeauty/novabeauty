(function() {
  'use strict';

  angular
    .module('novabeauty')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider.enableHTM
    $routeProvider
      .when('/clinic', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/clinic'
      });
  }

})();
