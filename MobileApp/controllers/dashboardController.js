app.controller("dashboardCtrl",function($scope,$stateParams,readJsonService,$rootScope){

  $rootScope.user={"Username":$stateParams.Username , "Password":$stateParams.Password};

  $rootScope.json=readJsonService.readJson();
  $rootScope.json.then(function(response){
  $rootScope.json=response.data;
});

})
