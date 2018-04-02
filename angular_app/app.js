var app=angular.module("angularApp",['ui.router',"ngMaterial"]);

app.config(function($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/main');

    $stateProvider

    .state("main",{
      url:'/main',
      templateUrl:'templates/main.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller:'loginCtrl'
    })
    .state('register',{
      url:'/register',
      templateUrl:'templates/register.html',
      controller:'registerCtrl'
    })
    .state("test",{
      url:"/test",
      templateUrl:"templates/test.html",
      controller:"testCtrl"
    })
    .state('readJson',{
      url:'/readJson',
      templateUrl:'templates/readJson.html',
      controller:'readJsonCtrl'
    });
});
