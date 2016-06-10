angular.module('nzApp').controller('mainController', function($scope, weatherService, $rootScope){

$scope.getWeather = function(city){
  weatherService.getWeather(city)
  .then(function(response){
    $scope.weather = response;
  console.log(response);
  });
};
// $scope.getWeather();

// console.log($scope.getWeather());


$scope.getTop5 = function(){
  weatherService.getTop5()
  .then(function(response){
      $scope.weathers = response;
      // console.log(response);
  });

};

  $scope.getTop5();


  $rootScope.$on('$stateChangeSuccess', function() {
     document.body.scrollTop = document.documentElement.scrollTop = 0;
  });


});
