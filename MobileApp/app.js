var app=angular.module("MobileApp",["ui.router","ngMaterial"]);

app.config(function($stateProvider,$urlRouterProvider){

$urlRouterProvider.otherwise("/login");

$stateProvider
.state("login",{
  url:"/login",
  templateUrl:"templates/login.html",
  controller:"loginCtrl"
})
.state("home",{
  url:"/home",
  templateUrl:"templates/home.html",
  controller:"homeCtrl"
})
.state("home.dashboard",{
  url:"/dashboard",
  templateUrl:"templates/dashboard.html",
  params:{"Username":null,"Password":null},
  controller:"dashboardCtrl"
});

})
