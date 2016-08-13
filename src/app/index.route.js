(function() {
  'use strict';

  angular
    .module('treadstone')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider

      //Home

      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      // Pages
    .when("/about", {templateUrl: "app/components/about/about.html", controller: "AboutCtrl"})
    .when("/faq", {templateUrl: "app/components/faq/faq.html", controller: "FaqCtrl"})
    .when("/pricing", {templateUrl: "app/components/pricing/pricing.html", controller: "PricingCtrl"})
    .when("/services", {templateUrl: "app/components/services/services.html", controller: "ServicesCtrl"})
    .when("/contact", {templateUrl: "app/components/contact/contact.html", controller: "ContactCtrl"})
    // Blog
    .when("/blog", {templateUrl: "app/components/blog/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "app/components/blog/blog_item.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "app/components/404/404.html", controller: "404Ctrl"});
  }

})();
