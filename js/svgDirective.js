angular.module('nzApp').directive('lotrImg', function() {
return {
  restrict: 'E',
  templateUrl: 'lotr.html',
  link: function(scope, element, attr){
    element.css({
      width: '100px',
      height: '100px'
    })
  }
};




});
