(function() {
  'use strict';

  angular
    .module('novabeauty')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1489692822655;
    vm.showToastr = showToastr;
    vm.scrollToSection = scrollTo;

    function scrollTo(anchor){
      $(anchor).animatescroll();
      sr.reveal('.service-alarm-container', { duration: 2000, container: '.services-alarm' }, 50);
    }

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);

      window.sr = ScrollReveal();
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
