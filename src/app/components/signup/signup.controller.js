(function() {
  'use strict';

  angular
    .module('treadstone')
    .controller('SignUpController', SignUpController);

  /** @ngInject */
  function SignUpController($log,$location, pricingService) {
    var vm = this;

    vm.prices = [];
    vm.prices = pricingService.getPrices();
    vm.option = 'Basic';
    vm.user = {};
    vm.moreInfo = false;
    vm.form_submitted = false;

    var geocoder = new google.maps.Geocoder();

    vm.signUp = function(option){
      vm.option = option;
      $location.url('/signup');
      $log.debug(vm.option);
      
    };

    vm.getMoreInfo = function(){
      return vm.moreInfo;
    };

    vm.submit = function(user){
      //$log.debug(' I was called!'+ Object.keys(user));
      vm.form_submitted = true;

    };

     /// Geo location functions
     vm.successFunction = function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      $scope.codeLatLng(lat, lng);
    }

    vm.errorFunction = function(){
      $log.debug("Geolocation is not supported by this browser.");
    }

    vm.codeLatLng = function(lat, lng) {

      var latlng = new google.maps.LatLng(lat, lng);

      geocoder.geocode({'latLng': latlng },  function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            //console.log("more results",results)
          if (results[1]) {
           //formatted address
          //$scope.geoLoc = results[0].formatted_address;
          vm.user.location = results[0].formatted_address;

          //find country name
           for (var i=0; i<results[0].address_components.length; i++) {
               for (var b=0;b<results[0].address_components[i].types.length;b++) {
                //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                  if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                    //this is the object  we are looking for
                    vm.city = results[0].address_components[i];
                    break;
                  }
               }
            }
          }
        } 
      });
    }

    vm.getLocation = function () {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(vm.successFunction, vm.errorFunction);
      } else {
          vm.error = "Geolocation is not supported by this browser.";
      }
    }

    vm.getLocation(); //initialize location search
  
    //$log.debug(' Pricing controller called');
}

})();
