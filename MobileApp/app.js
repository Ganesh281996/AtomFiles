var app=angular.module("MobileApp",["ui.router","ngMaterial"]);

app.config(function($stateProvider,$urlRouterProvider){

$urlRouterProvider.otherwise("/login");

$stateProvider
.state("login",{
  url:"/login",
  templateUrl:"templates/login.html",
  controller:"loginCtrl"
})
.state("dashboard",{
  url:"/dashboard",
  templateUrl:"templates/dashboard.html",
  params:"user",
  controller:"dashboardCtrl"
});

})
