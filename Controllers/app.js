var app=angular.module("myApp",['ui.router']);

app.config(function($stateProvider){
stateProvider
.state("/",{
  templateUrl:"login.html",
  controller:'loginCtrl'
})
});
