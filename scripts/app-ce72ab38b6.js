!function(){"use strict";angular.module("novabeauty",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ngRoute","ngMaterial","toastr"])}(),function(){"use strict";function i(){function i(){return t}var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=i}angular.module("novabeauty").service("webDevTec",i)}(),function(){"use strict";function i(){function i(i){var t=this;t.relativeDate=i(t.creationDate).fromNow()}i.$inject=["moment"];var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:i,controllerAs:"vm",bindToController:!0};return t}angular.module("novabeauty").directive("acmeNavbar",i)}(),function(){"use strict";function i(i,t){function s(s){function a(i){return i.data}function l(t){i.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))}return s||(s=30),t.get(e+"/contributors?per_page="+s).then(a)["catch"](l)}var e="https://api.github.com/repos/Swiip/generator-gulp-angular",a={apiHost:e,getContributors:s};return a}i.$inject=["$log","$http"],angular.module("novabeauty").factory("githubContributor",i)}(),function(){"use strict";function i(i){function t(t,s,e,a){var l,n=i(s[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});s.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(i){n.type(i).pause()["delete"]()}),l=t.$watch("vm.contributors",function(){angular.forEach(a.contributors,function(i){n.type(i.login).pause()["delete"]()})}),t.$on("$destroy",function(){l()})}function s(i,t){function s(){return e().then(function(){i.info("Activated Contributors View")})}function e(){return t.getContributors(10).then(function(i){return a.contributors=i,a.contributors})}var a=this;a.contributors=[],s()}s.$inject=["$log","githubContributor"];var e={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:s,controllerAs:"vm"};return e}i.$inject=["malarkey"],angular.module("novabeauty").directive("acmeMalarkey",i)}(),function(){"use strict";function i(i,t,s,e){function a(){s("left").toggle()}function l(){var i="https://yandex.ua/maps/143/kyiv/?ll=30.536315%2C50.414448&z=17&mode=search&text=%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0%2C%20%D0%9A%D0%B8%D0%B5%D0%B2%2C%20%D0%B1%D1%83%D0%BB%D1%8C%D0%B2%D0%B0%D1%80%20%D0%94%D1%80%D1%83%D0%B6%D0%B1%D1%8B%20%D0%9D%D0%B0%D1%80%D0%BE%D0%B4%D0%BE%D0%B2%2013&sll=30.536315%2C50.414448&sspn=0.032315%2C0.012066",t=window.open(i,"_blank");t.focus()}function n(i){a(),$(i).animatescroll(),sr.reveal(".service-alarm-container",{duration:2e3,container:".services-alarm"},50)}function o(){d(),i(function(){r.classAnimation="rubberBand"},4e3),window.sr=ScrollReveal()}function c(){t.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),r.classAnimation=""}function d(){e.get(v).then(function(i){for(var t in i.data.query.results.rate){var s=i.data.query.results.rate[t];m[s.id]=s.Rate}e.get("prices.json").then(function(i){for(var t in i.data.categories){var s=i.data.categories[t];for(var e in s.services)console.log(s.services[e].name)}},function(){console.log("failed")})})}var r=this;r.awesomeThings=[],r.classAnimation="",r.creationDate=1489692822655,r.showToastr=c,r.scrollToSection=n,r.openMap=l,r.toggleNavigation=a;var m={},v="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22USDEUR%22%2C%20%22USDUAH%22%2C%20%22EURUAH%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";o()}i.$inject=["$timeout","toastr","$mdSidenav","$http"],angular.module("novabeauty").controller("MainController",i)}(),function(){"use strict";function i(i){i.debug("runBlock end")}i.$inject=["$log"],angular.module("novabeauty").run(i)}(),function(){"use strict";function i(i){i.when("/",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).otherwise({redirectTo:"/"})}i.$inject=["$routeProvider"],angular.module("novabeauty").config(i)}(),function(){"use strict";angular.module("novabeauty").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function i(i,t){i.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}i.$inject=["$logProvider","toastrConfig"],angular.module("novabeauty").config(i)}(),angular.module("novabeauty").run(["$templateCache",function(i){i.put("app/main/main.html",'<md-toolbar md-scroll-shrink class=only-mobile hide show-sm show-md show-xs><div class=md-toolbar-tools><md-button class=md-icon-button ng-click=main.toggleNavigation() aria-label="Open Menu"><md-icon md-svg-src=assets/images/menu.svg></md-icon></md-button><span flex><img src=assets/images/koltunova.svg></span><md-button class=md-icon-button aria-label=Call><md-icon md-svg-src=assets/images/phone.svg></md-icon></md-button></div></md-toolbar><md-sidenav class="md-sidenav-left gradient-background" md-component-id=left md-disable-backdrop md-whiteframe=4><div flex class=mobile-logo-container>&nbsp;</div><md-content><div class=menu-container layout-align=center><md-list flex><md-list-item ng-click="main.scrollToSection(\'#about\')" class=md-primary><md-icon md-svg-src=assets/images/n_logo.svg></md-icon><p>О Клинике</p></md-list-item><md-list-item ng-click="main.scrollToSection(\'#services\')"><md-icon md-svg-src=assets/images/diamond.svg></md-icon><p>Услуги</p></md-list-item><md-list-item ng-click=alert(1)><md-icon md-svg-src=assets/images/shop.svg></md-icon><p>Магазин</p></md-list-item><md-list-item ng-click="main.scrollToSection(\'#alarm-services\')"><md-icon md-svg-src=assets/images/season.svg></md-icon><p>Сезонные предложения</p></md-list-item><md-list-item ng-click="main.scrollToSection(\'#location\')"><md-icon md-svg-src=assets/images/map.svg></md-icon><p>Как нас найти</p></md-list-item></md-list></div></md-content></md-sidenav><div layout=vertical class=first-section layout-fill><div class=left-panel flex=25 layout=column layout-fill><div class="logo-container logo" layout-align="center center"><div flex></div><div class="section-arrow rectangle-45"><i class=material-icons>arrow_downward</i></div></div><div class="menu-container gradient-background" layout-align=center><md-list flex><md-list-item ng-click="main.scrollToSection(\'#about\')" class=md-primary><md-icon md-svg-src=assets/images/n_logo.svg></md-icon><p>О Клинике</p></md-list-item><md-list-item ng-click="main.scrollToSection(\'#services\')"><md-icon md-svg-src=assets/images/diamond.svg></md-icon><p>Услуги</p></md-list-item><md-list-item ng-click=alert(1)><md-icon md-svg-src=assets/images/shop.svg></md-icon><p>Магазин</p></md-list-item><md-list-item ng-click="main.scrollToSection(\'#alarm-services\')"><md-icon md-svg-src=assets/images/season.svg></md-icon><p>Сезонные предложения</p></md-list-item><md-list-item ng-click="main.scrollToSection(\'#location\')"><md-icon md-svg-src=assets/images/map.svg></md-icon><p>Как нас найти</p></md-list-item></md-list></div></div><div layout=row flex class=landing-image layout-fill><div class=slogan><div class="slogan-quote-start wow fadeIn" data-wow-duration=1s>„</div><div class="slogan-text wow fadeIn" data-wow-duration=1s>Мы знаем о коcметологии всё и даже больше</div><div class="slogan-quote-end wow fadeIn" data-wow-duration=1s>“</div></div></div></div><div layout=vertical class=second-section layout-fill id=about><div class=left-panel flex=25 layout=column layout-fill><div class=section-title layout=column layout-align="center center"><div layout=row layout-align="center center" class="wow bounceInDown" data-wow-duration=1s><div class=section-circle>&nbsp;</div><div class=section-text>Клиника</div></div><div class="section-message wow bounceInUp" data-wow-duration=1s layout-align="center center">Косметология для красоты и здоровья</div></div></div><div layout=column flex layout-fill class=about-section><div class="koltunova-about gradient-background wow fadeIn" data-wow-duration=1s layout=column><div class="article-title wow zoomIn" data-wow-duration=1s>Клиника доктора Колтуновой</div><div class="article-content wow zoomIn" data-wow-duration=1s><p>Я очень рада тому, что Вы выбрали время познакомиться со мной и моей клиникой – ведь клиника косметологии и эстетической медицины создана для того, чтобы всегда могли выглядеть безупречно! Посетители клиники – мужчины и женщины с активной жизненной позицией. Для тех, чья внешность – отражение статуса, благосостояния и успешности в жизни.</p><p>Долгие годы международной практики позволили мне накопить огромный опыт и занять одну из первых позиций по контурной пластике, инъекционным технологиям, безоперационному омоложению лица и коррекции тела.</p></div></div><div class=koltunova-tour layout=column><div class="section-icon rectangle-45" layout=column layout-align="center center"><md-icon md-svg-src=assets/images/n_logo.svg></md-icon></div><div class=tour-message>Прогуляйтесь по нашей клинике</div><div class=tour-description>Виртуальный тур</div></div></div></div><div layout=vertical class="third-section gradient-background" layout-fill id=services><div class=left-panel flex=25 layout=column layout-fill><div class=section-title layout=column layout-align="center center"><div layout=row layout-align="center center" class="wow bounceInUp" data-wow-duration=1s><div class=section-circle>&nbsp;</div><div class=section-text>Улуги</div></div><div class="section-message wow bounceInDown" data-wow-duration=1s layout-align="center center">Cделаем вас здоровее и красивее</div></div></div><div layout=column flex layout-fill class=services-section><div layout=column class=services-section><div layout=row class=section-row><div flex=50 class="section-image image-1">&nbsp;</div><div flex class="section gradient-background" layout=column layout-fill><div class=service-section-title layout=column><div layout=row><div class=section-circle>&nbsp;</div><div class=section-text>Косметология</div></div><md-list class=services-list><md-list-item ng-click=alert(1) class="md-primary md-2-line"><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>Инъекционная косметология</h3><p>Secondary text</p></div></md-list-item><md-list-item ng-click=alert(1) class="md-primary md-2-line"><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>Пилинги</h3><p>Удаление, отшелушивание верхнего ороговевшего слоя кожи</p></div></md-list-item><md-list-item ng-click=alert(1) class="md-primary md-2-line"><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>Контурная пластика</h3><p>Корекция гидроксиапатитом кальция и полимолочкой кислотой</p></div></md-list-item><md-list-item ng-click=alert(1) class="md-primary md-2-line"><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>Лазерная косметология</h3><p>Ювидерм, Ялупро</p></div></md-list-item><md-list-item ng-click=alert(1) class="md-primary md-2-line"><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>Аппаратная косметология</h3></div></md-list-item><md-list-item ng-click=alert(1) class="md-primary md-2-line"><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>Косметические уходы</h3><p>Зона, пробирки</p></div></md-list-item></md-list></div></div></div><div layout=row class=section-row><div class="section no-background" layout=column><div class=service-section-title layout=column><div layout=row><div class=section-circle>&nbsp;</div><div class=section-text>Косметология</div></div><md-list class=services-list><md-list-item ng-click=alert(1) class="md-primary md-2-line"><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>Инъекционная косметология</h3><p>Secondary text</p></div></md-list-item><md-list-item ng-click=alert(1) class="md-primary md-2-line"><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>Пилинги</h3><p>Удаление, отшелушивание верхнего ороговевшего слоя кожи</p></div></md-list-item><md-list-item ng-click=alert(1) class="md-primary md-2-line"><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>Контурная пластика</h3><p>Корекция гидроксиапатитом кальция и полимолочкой кислотой</p></div></md-list-item><md-list-item ng-click=alert(1) class="md-primary md-2-line"><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>Лазерная косметология</h3><p>Ювидерм, Ялупро</p></div></md-list-item><md-list-item ng-click=alert(1) class="md-primary md-2-line"><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>Аппаратная косметология</h3></div></md-list-item><md-list-item ng-click=alert(1) class="md-primary md-2-line"><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>Косметические уходы</h3><p>Зона, пробирки</p></div></md-list-item></md-list></div></div><div flex=50 class="section-image image-2"><div class="services-icon rectangle-45" layout=column layout-align="center center"><md-icon md-svg-src=assets/images/diamond.svg></md-icon></div></div></div><div layout=row class=section-row><div flex=50 class="section-image image-3">&nbsp;</div><div flex class="section gradient-background" layout=column><div class=service-section-title layout=column><div layout=row><div class=section-circle>&nbsp;</div><div class=section-text>Косметология</div></div><md-list class=services-list><md-list-item ng-click=alert(1) class="md-primary md-2-line"><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>Инъекционная косметология</h3><p>Secondary text</p></div></md-list-item><md-list-item ng-click=alert(1) class="md-primary md-2-line"><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>Пилинги</h3><p>Удаление, отшелушивание верхнего ороговевшего слоя кожи</p></div></md-list-item><md-list-item ng-click=alert(1) class="md-primary md-2-line"><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>Контурная пластика</h3><p>Корекция гидроксиапатитом кальция и полимолочкой кислотой</p></div></md-list-item><md-list-item ng-click=alert(1) class="md-primary md-2-line"><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>Лазерная косметология</h3><p>Ювидерм, Ялупро</p></div></md-list-item><md-list-item ng-click=alert(1) class="md-primary md-2-line"><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>Аппаратная косметология</h3></div></md-list-item><md-list-item ng-click=alert(1) class="md-primary md-2-line"><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>Косметические уходы</h3><p>Зона, пробирки</p></div></md-list-item></md-list></div></div></div><div layout=row class=section-row><div flex class="section no-background" layout=column><div class=service-section-title layout=column><div layout=row><div class=section-circle>&nbsp;</div><div class=section-text>Косметология</div></div><md-list class=services-list><md-list-item ng-click=alert(1) class="md-primary md-2-line"><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>Инъекционная косметология</h3><p>Secondary text</p></div></md-list-item><md-list-item ng-click=alert(1) class="md-primary md-2-line"><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>Пилинги</h3><p>Удаление, отшелушивание верхнего ороговевшего слоя кожи</p></div></md-list-item><md-list-item ng-click=alert(1) class="md-primary md-2-line"><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>Контурная пластика</h3><p>Корекция гидроксиапатитом кальция и полимолочкой кислотой</p></div></md-list-item><md-list-item ng-click=alert(1) class="md-primary md-2-line"><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>Лазерная косметология</h3><p>Ювидерм, Ялупро</p></div></md-list-item><md-list-item ng-click=alert(1) class="md-primary md-2-line"><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>Аппаратная косметология</h3></div></md-list-item><md-list-item ng-click=alert(1) class="md-primary md-2-line"><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>Косметические уходы</h3><p>Зона, пробирки</p></div></md-list-item></md-list></div></div><div flex=50 class="section-image image-4"><div class="services-icon rectangle-45" layout=column layout-align="center center"><md-icon md-svg-src=assets/images/diamond.svg></md-icon></div></div></div></div></div></div><div layout=vertical class=fourth-section id=alarm-services layout-fill><div class=left-panel flex=25 layout=column layout-fill><div class=section-title layout=column layout-align="center center"><div layout=row layout-align="center center" class="wow bounceInDown" data-wow-duration=.5s><div class=section-circle>&nbsp;</div><div class=section-text>Сезонные предложения</div></div><div class="section-message wow bounceInUp" data-wow-duration=.5s layout-align="center center">Рекомендации от клиники</div></div></div><div layout=row flex layout-wrap layout-align=stretch class="services-alarm gradient-background"><div layout-align="space-between center" layout=column flex-md=50 flex-sm=50 flex-xs=50 flex=33 class="service-alarm-container service-image-1"><div class="service-alarm-title wow zoomIn" data-wow-duration=1s>Вакуумно-роликовый массаж</div><div class="service-alarm-price wow zoomInUp" data-wow-duration=1s>400 гривен сеанс</div></div><div layout-align="space-between center" layout=column flex-md=50 flex-sm=50 flex-xs=50 flex=33 class="service-alarm-container service-image-2"><div class="service-alarm-title wow zoomIn" data-wow-duration=1s>Составление индивидуальных програм питания</div><div class="service-alarm-price wow zoomInUp" data-wow-duration=1s>400 гривен сеанс</div></div><div layout-align="space-between center" layout=column flex-md=50 flex-sm=50 flex-xs=50 flex=33 class="service-alarm-container service-image-3"><div class="service-alarm-title wow zoomIn" data-wow-duration=1s>Ультразвуковые процедуры (пилинг, увлажнение, лечение морщин)</div><div class="service-alarm-price wow zoomInUp" data-wow-duration=1s>400 гривен сеанс</div></div><div layout-align="space-between center" layout=column flex-md=50 flex-sm=50 flex-xs=50 flex=33 class="service-alarm-container service-image-4"><div class="service-alarm-title wow zoomIn" data-wow-duration=1s>Детоксикация и укрепление иммунитета</div><div class="service-alarm-price wow zoomInUp" data-wow-duration=1s>400 гривен сеанс</div></div><div layout-align="space-between center" layout=column flex-md=50 flex-sm=50 flex-xs=50 flex=33 class="service-alarm-container service-image-5"><div class="service-alarm-title wow zoomIn" data-wow-duration=1s>Обёртывание и моделирование</div><div class="service-alarm-price wow zoomInUp" data-wow-duration=1s>400 гривен сеанс</div></div><div layout-align="space-between center" layout=column flex-md=50 flex-sm=50 flex-xs=50 flex=33 class="service-alarm-container service-image-6"><div class="service-alarm-title wow zoomIn" data-wow-duration=1s>Диагностика новообразований</div><div class="service-alarm-price wow zoomInUp" data-wow-duration=1s>400 гривен сеанс</div></div></div></div><div layout=vertical class=fifth-section id=location layout-fill><div class="left-panel gradient-background" flex=25 layout=column layout-fill><div class=section-title layout=column layout-align="center center"><div layout=row layout-align="center center" class="wow bounceInDown" data-wow-duration=1s><div class=section-circle>&nbsp;</div><div class=section-text>Контакт</div></div><div class="section-message wow bounceInUp" data-wow-duration=1s layout-align="center center">Как нас найти и с нами связаться</div><div class=address-text>г. Киев, бул. Дружбы Народов 13</div><div class=working-hours><div class=title>Часы работы</div><div class=working-hours-when><p>По будням с 9 до 18:00</p><p>Cуббота с 10 до 17:00</p><p>Восресенье выходной</p></div></div></div></div><div layout-gt-md=row layout-xs=column layout-sm=column layout-md=column flex class=contact-container layout-fill layout-align=stretch><div flex layout=column flex layout-align="center stretch" layout-fill><div class=logo-container><div class=logo>&nbsp;</div></div><div class=contacts layout=column layout-align="center stretch"><div class=phone><md-icon md-svg-src=assets/images/phone.svg></md-icon><span>044 230 16 01</span></div><div class=whatsapp><md-icon md-svg-src=assets/images/whatsapp.svg></md-icon><span>093 633 46 60</span></div><div class=email><md-icon md-svg-src=assets/images/email.svg></md-icon><span>mail@novabeauty.biz</span></div></div><div class=regards layout-align="center center" flex><img src=assets/images/regards.jpg></div></div><div flex-gt-md=50 class=map ng-click=main.openMap()><div class=place-map>&nbsp;</div></div></div></div>'),i.put("app/components/navbar/navbar.html",'<md-toolbar layout=row layout-align="center center"><md-button href=https://github.com/Swiip/generator-gulp-angular>Gulp Angular</md-button><section flex layout=row layout-align="left center"><md-button href=# class=md-raised>Home</md-button><md-button href=# class=md-raised>About</md-button><md-button href=# class=md-raised>Contact</md-button></section><md-button class=acme-navbar-text>Application was created {{ vm.relativeDate }}.</md-button></md-toolbar>')}]);
//# sourceMappingURL=../maps/scripts/app-ce72ab38b6.js.map
