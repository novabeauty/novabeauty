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

    vm.openPriceDialog = function(ev) {
      $mdDialog.show({
          controller: DialogController,
          controllerAs: 'dialog',
          template: "<md-dialog class='gradient-background'>          <form ng-cloak> <md-toolbar><div class='md-toolbar-tools'><h2></h2><span class='price-header' flex>Наши цены</span>" +
          "<md-button class='md-icon-button' ng-click='cancel()'><md-icon md-svg-src='assets/images/close.svg'></md-icon></md-button>" +
          "</div></md-toolbar>   <md-dialog-content>        <div layout=\"vertical\" class=\"service-section gradient-background\" id=\"services-section\" layout-fill>  " +
          "<md-grid-list flex layout-fill   " +
          " md-cols-xs=\"1\" md-cols-sm=\"1\" md-cols-md=\"2\" md-cols-gt-md=\"3\"    md-row-height-gt-md=\"1:1\" md-row-height=\"2:2\"    md-gutter=\"12px\" md-gutter-gt-sm=\"8px\" >   " +
          " <md-grid-tile class=\"md-whiteframe-3dp\" ng-repeat=\"serviceCategory in availableService\" ng-class=\"getSectionClass($index)\" \"                 " +
          " md-rowspan=\"{{serviceCategory.Multiplier}}\" md-colspan=\"1\" md-colspan-sm=\"1\" md-colspan-xs=\"1\" layout=\"column\">      " +
          "<div layout=\"column\" flex layout-fill class=\"service-section-container\">        " +
          " <div class=\"price-section-title\">{{serviceCategory.Name}}</div>       " +
          " <div class=\"price-section-prices\" layout=\"column\">          " +
          "<div class=\"price-section-item\" ng-repeat=\"service in serviceCategory.Services\" layout=\"row\" layout-align=\"space-between start\">            " +
          "<div class=\"price-section-item-name\" >{{service.Name}}</div>            <div class=\"price-section-item-price-container\" layout=\"column\" >              " +
          "<div class=\"main-price\">{{service.Price}} {{service.Currency}}</div>             " +
          " <div class=\"secondary-price\">{{service.OldPrice}}</div>            " +
          "</div>          </div>        </div>      </div>    </md-grid-tile>  </md-grid-list></div></md-dialog-content>          </form>          </md-dialog>",
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

    vm.openTour = function(){
      var win = window.open(tourURL, '_blank');
      win.focus();
    };



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
      $http.get(exchangeApi).then(function(result)
      {
        for(var index in result.data.query.results.rate){
          var obj = result.data.query.results.rate[index];
          rates[obj.id] = obj.Rate;
        }
        $http.get("prices.json").then(function(result){
            for(var cIndex in result.data.categories){
              var category = result.data.categories[cIndex];
              for(var sIndex in category.Services){
                var service = category.Services[sIndex];
                category.Services[sIndex].OldPrice = calculatePrice(service, rates);
              }
            }
          vm.services = result.data.categories;
        }, function(){console.log("failed");});
      });
    }
  }
})();
