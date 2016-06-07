angular.module('nzApp').controller('mainController', function($scope, weatherService){

$scope.getWeather = function(city){
  weatherService.getWeather(city)
  .then(function(response){
    $scope.weather = response;
    // console.log(response);
  });
};
$scope.getWeather();
// $scope.get5weather = function() {
//   var arr = weatherService.get5Weather();
//
// };


$scope.getTop5 = function(){
  weatherService.getTop5()
  .then(function(response){
      $scope.weathers = response;
      console.log(response);
  });

};

  $scope.getTop5();




});
