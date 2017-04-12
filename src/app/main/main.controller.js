(function() {
  'use strict';

  angular
    .module('novabeauty')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, toastr, $mdSidenav, $http) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1489692822655;
    vm.showToastr = showToastr;
    vm.scrollToSection = scrollTo;
    vm.openMap = openMap;
    vm.toggleNavigation = toggleNavigation;

    var rates = {};

    var exchangeApi = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22USDEUR%22%2C%20%22USDUAH%22%2C%20%22EURUAH%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=';


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

    function calculatePrice(price, currency, rates){
      //USDEUR, EURUAH, USDUAH

      var result = {eur:0, usd:0, uah:0};
      if(currency === 'UAH'){
        result.usd = price/rates['USDUAH'];
        result.eur = price/rates['EURUAH']
        result.uah = price;
      }
      if(currency === 'USD'){
        result.usd = price;
        result.eur = price*rates['UER']
        result.uah = price*rates['USDUAH'];
      }

    }

    function getWebDevTec() {
      $http.get(exchangeApi).then(function(result)
      {
        for(var index in result.data.query.results.rate){
          var obj = result.data.query.results.rate[index];
          rates[obj.id] = obj.Rate;
        }
        $http.get("prices.json").then(function(result){
            for(var cIndex in result.data.categories){
              var category = result.data.categories[cIndex];
              for(var sIndex in category.services){
                console.log(category.services[sIndex].name);
              }
            }
        }, function(){console.log("failed");});
      });
    }
  }
})();
