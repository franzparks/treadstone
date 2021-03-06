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
    .when('/about', {
      templateUrl: 'app/components/about/about.html', 
      controller: 'AboutController',
      controllerAs: 'about'
    })
    .when('/faq', {
      templateUrl: 'app/components/faq/faq.html', 
      controller: 'FaqController',
      controllerAs: 'faq'
    })
    .when('/pricing', {
      templateUrl: 'app/components/pricing/pricing.html', 
      controller: 'PricingController',
      controllerAs: 'pricing'
    })
    .when('/signup', {
      templateUrl: 'app/components/signup/signup.html',
      controller: 'SignUpController',
      controllerAs: 'signup'
    })
    .when('/services', {
      templateUrl: 'app/components/services/services.html',
      controller: 'ServicesController',
      controllerAs: 'services'
    })
    .when('/contact', {
      templateUrl: 'app/components/contact/contact.html', 
      controller: 'ContactController',
      controllerAs: 'contact'
    })
    // Blog
    .when('/blog', {
      templateUrl: 'app/components/blog/blog.html', 
      controller: 'BlogController',
      controllerAs: 'blog'
    })
    .when('/blog/post', {
      templateUrl: 'app/components/blog/blog_item.html',
       controller: 'BlogController',
       controllerAs: 'blog_item'
     })
    // else 404
    .when('/404', {
      templateUrl: 'app/components/404/error.html', 
      controller: 'ErrorController',
      controllerAs: 'error'
    })
    .otherwise('/');
  }

})();
