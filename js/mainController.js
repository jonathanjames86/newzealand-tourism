angular.module('nzApp').controller('mainController', function($scope, weatherService){

$scope.getWeather = function(city){
  weatherService.getWeather(city)
  .then(function(response){
    $scope.weather = response;
    // console.log(response);
  });
};
// $scope.getWeather('Auckland');
// $scope.get5weather = function() {
//   var arr = weatherService.get5Weather();
//
// };
$scope.getFive = weatherService.getFive;


});
