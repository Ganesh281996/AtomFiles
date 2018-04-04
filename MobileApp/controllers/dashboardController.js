app.controller("dashboardCtrl",function($scope,$stateParams){
  console.log($stateParams.user);
$scope.user=$stateParams;
})
