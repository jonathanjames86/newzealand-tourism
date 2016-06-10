angular.module('nzApp').directive('weatherMachine', function() {
return {
  restrict: 'E',
  scope: {city: '='},
  link: function(scope, element, attr){
      $(element).append("<p>" + scope.city + "</p>");
  }
};




});
