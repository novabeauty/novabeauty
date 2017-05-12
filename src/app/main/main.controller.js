(function() {
  'use strict';

  angular
    .module('novabeauty')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, toastr, $mdSidenav, $http, $mdDialog) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1489692822655;
    vm.showToastr = showToastr;
    vm.scrollToSection = scrollTo;
    vm.openMap = openMap;
    vm.toggleNavigation = toggleNavigation;
    vm.services = {};

    vm.getSectionClass = function(index){
      return "price-section-image-"+index;
    };

    var fbProfile = "https://www.facebook.com/novabeauty.biz";
    var instaProfile = "https://www.instagram.com/dr.nkoltunova/";

    vm.openSocial = function(social){

    };

    vm.callNB = function(){
      window.location.href="tel://+380675076085";
    };

    vm.openAboutDialog = function(ev){
      $mdDialog.show({
        controller: AboutKoltunovaController,
        controllerAs: 'dialog',
        templateUrl : 'app/main/koltunova.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: true
      });
    };

    function AboutKoltunovaController($scope, $mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.showOther = function(){
        $('.article-continue').toggleClass('hide');
        $('.article-continue').toggleClass('fadeInDown');
        $('#aboutKoltunova').toggleClass('increase-width')

        $('#readAll').hide();

        $('.koltunova-certificates').slick({
          dots: false,
          infinite: true,
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true
        });
      };

      $scope.cancel = function() {
        $mdDialog.cancel();
      };

      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };

      $scope.certificates = new Array();

      for(var c = 1; c< 47; c++){
        var image_path = 'assets/images/certs/' + c + '.jpg';
        $scope.certificates.push({'path' : image_path});
      }
    }

    vm.openDirectionDialog = function(ev){
      $mdDialog.show(
        {
          controller: DirectionController,
          controllerAs: 'dialog',
          templateUrl : 'app/main/direction.tmpl.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: true,
          fullscreen: true
        }
      );
    };

    function DirectionController($scope, $mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
      };

      $scope.cancel = function() {
        $mdDialog.cancel();
      };

      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };
      $scope.getSectionClass = function(index){
        return "price-section-image-"+index;
      };
    }

    vm.openPriceDialog = function(ev) {
      $mdDialog.show({
          controller: DialogController,
          controllerAs: 'dialog',
          templateUrl: "app/main/price.tmpl.html",
          parent: angular.element(document.body),
          targetEvent: ev,
          locals :{items : vm.services},
          clickOutsideToClose:true,
          fullscreen: true // Only for -xs, -sm breakpoints.
        })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
    };

    function DialogController($scope, $mdDialog, items) {
      this.availableService = items;
      $scope.availableService = items;
      $scope.hide = function() {
        $mdDialog.hide();
      };

      $scope.cancel = function() {
        $mdDialog.cancel();
      };

      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };
      $scope.getSectionClass = function(index){
        return "price-section-image-"+index;
      };
    }

    var rates = {};

    var tourURL = 'https://youtu.be/NLBGd0gXvD8';

    vm.openTour = function(ev){
      $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.body))
        .clickOutsideToClose(true)
        .title('В данный момент эта функция не доступна')
        .textContent('Мы работаем над виртуальным туром и он будет доступен в ближайшее время')
        .ariaLabel('Виртуальный')
        .ok('Продолжить')
        .targetEvent(ev));
    };



    var exchangeApi = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22USDEUR%22%2C%20%22USDUAH%22%2C%20%22EURUAH%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=';


    function toggleNavigation(){
      $mdSidenav('left').toggle();
    }

    function openMap(){
      var url = 'https://yandex.ua/maps/143/kyiv/?ll=30.538370%2C50.415123&z=16&mode=whatshere&whatshere%5Bpoint%5D=30.535838%2C50.414231&whatshere%5Bzoom%5D=17';
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

    function calculatePrice(service, rates){
      //USDEUR, EURUAH, USDUAH

      var result = {eur:0, usd:0, uah:0};
      var price = service.Price;
      var startPrice = service.StartPrice;
      var endPrice = service.EndPrice;
      var currency = service.Currency;

      if(currency === 'UAH'){
        if(price.indexOf('-') >0)
        {
          return "~"+ Math.floor(startPrice/rates['USDUAH']) + "$/"+Math.floor(startPrice/rates['EURUAH'])+"€ — " + Math.floor(endPrice/rates['USDUAH']) + "$/"+Math.floor(endPrice/rates['EURUAH'])+"€";
        }
        result.usd = Math.floor(price/rates['USDUAH']);
        result.eur = Math.floor(price/rates['EURUAH']);
        return "~"+ result.usd + "$/"+result.eur+"€";
        result.uah = price;
      }
      if(currency === 'USD'){
        if(price.indexOf('-') >0){
          return "~"+ Math.floor(startPrice*rates['USDUAH']) + "UAH/"+Math.floor(startPrice*rates['USDEUR'])+"€ - "+ Math.floor(endPrice*rates['USDUAH']) + "UAH/"+Math.floor(endPrice*rates['USDEUR'])+"€";
        }
        result.usd = price;
        result.eur = Math.floor(price*rates['USDEUR']);
        result.uah = Math.floor(price*rates['USDUAH']);
        return "~"+ result.uah + "UAH/"+result.eur+"€";
      }
      if(currency === 'EUR'){
        if(price.indexOf('-') >0) {
          return "~"+ Math.floor(startPrice*rates['EURUAH']) + "UAH/"+Math.floor(startPrice/rates['USDEUR'])+"$ - "+ Math.floor(endPrice*rates['EURUAH']) + "UAH/"+Math.floor(endPrice/rates['USDEUR'])+"$";
        }

        result.usd = Math.floor(price/rates['USDEUR']);
        result.eur = price;
        result.uah = Math.floor(price*rates['EURUAH']);
        return "~"+ result.uah + "UAH/"+result.usd+"$";
      }
      return "";
    }

    function getWebDevTec() {
      $http.get("prices.json").then(function(result){
        //for(var cIndex in result.data.categories){
        //  var category = result.data.categories[cIndex];
        //  for(var sIndex in category.Services){
        //    var service = category.Services[sIndex];
        //    category.Services[sIndex].OldPrice = calculatePrice(service, rates);
        //  }
        //}
        vm.services = result.data.categories;
      }, function(){console.log("failed");});
      $http.get(exchangeApi).then(function(result)
      {
        for(var index in result.data.query.results.rate){
          var obj = result.data.query.results.rate[index];
          rates[obj.id] = obj.Rate;
        }

      });

    }
  }
})();
