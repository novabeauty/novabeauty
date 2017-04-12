(function() {
  'use strict';

  angular
    .module('novabeauty')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $mdSidenav) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1489692822655;
    vm.showToastr = showToastr;
    vm.scrollToSection = scrollTo;
    vm.openMap = openMap;
    vm.toggleNavigation = toggleNavigation;


    function toggleNavigation(){
      $mdSidenav('left').toggle();
    }

    function openMap(){
      var url = 'https://yandex.ua/maps/143/kyiv/?ll=30.536315%2C50.414448&z=17&mode=search&text=%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0%2C%20%D0%9A%D0%B8%D0%B5%D0%B2%2C%20%D0%B1%D1%83%D0%BB%D1%8C%D0%B2%D0%B0%D1%80%20%D0%94%D1%80%D1%83%D0%B6%D0%B1%D1%8B%20%D0%9D%D0%B0%D1%80%D0%BE%D0%B4%D0%BE%D0%B2%2013&sll=30.536315%2C50.414448&sspn=0.032315%2C0.012066';
      var win = window.open(url, '_blank');
      win.focus();
    }

    function scrollTo(anchor){
      toggleNavigation();
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
