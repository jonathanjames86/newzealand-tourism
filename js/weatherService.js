angular.module('nzApp').service('weatherService', function($http, $q) {

    this.getWeather = function(city) {
        var defer = $q.defer();
        $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&APPID=a6d105d92252d6adf49ad53604180038')
            .then(function(city) {
                console.log(city);
                defer.resolve(city.data);
            });
        return defer.promise;
    };






    var auckland = $http({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=Auckland&units=imperial&APPID=a6d105d92252d6adf49ad53604180038',
        cache: 'true'
    });
    var queenstown = $http({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=queenstown&units=imperial&APPID=a6d105d92252d6adf49ad53604180038',
        cache: 'true'
    });
    var hobbington = $http({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=christchurch&units=imperial&APPID=a6d105d92252d6adf49ad53604180038',
        cache: 'true'
    });
    var milford = $http({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=milfordsound&units=imperial&APPID=a6d105d92252d6adf49ad53604180038',
        cache: 'true'
    });
    var capeR = $http({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=capereinga&units=imperial&APPID=a6d105d92252d6adf49ad53604180038',
        cache: 'true'
    });

    this.getTop5 = function() {

        return $q.all([auckland, queenstown, hobbington, milford, capeR]).then(function(data) {
            return data;
        });
    };
    //
    // this.get5Weather = function(city){
    //   var arr = [];
    //   $http.get('http://api.openweathermap.org/data/2.5/weather?q=Auckland&units=imperial&APPID=a6d105d92252d6adf49ad53604180038')
    //     .then(function(city){
    //       // console.log(data);
    //       arr.push(city.data)
    //     });
    //   $http.get('http://api.openweathermap.org/data/2.5/weather?q=Auckland&units=imperial&APPID=a6d105d92252d6adf49ad53604180038')
    //     .then(function(city){
    //       // console.log(data);
    //       arr.push(city.data)
    //     });
    //   return defer.promise;
    // };


    // api.openweathermap.org/data/2.5/weather?q=Auckland&APPID=a6d105d92252d6adf49ad53604180038


});
