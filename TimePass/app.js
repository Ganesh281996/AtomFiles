var app=angular.module("myApp",['ui-router']);

app.config(function($stateProvider) {

    // $urlRouterProvider.otherwise('/login');

    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: 'login.html'
        })
});
