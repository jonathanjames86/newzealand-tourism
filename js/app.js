angular.module('nzApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('welcome', {
            url:'/',
            templateUrl: "./home/home.html"
        })
        .state('about', {
          url:'/about',
          templateUrl: './about/about'
        })
        .state('northIsland',{
          url:'/northIsland',
          templateUrl: './northIsland/northIsland.html'
        })
        .state('southIsland',{
          url:'/southIsland',
          templateUrl: './southIsland/southIsland.html'
        })
        .state('travelPlans',{
          url:'/travelPlans',
          templateUrl: './travelPLans/travelPlans.html'
        })
        .state('weather', {
          url: '/weather',
          templateUrl: './weather/weather.html'
        })
        .state('quicktips', {
          url: '/quicktips',
          templateUrl: './quicktips/quicktips.html'
        });





});
