app.controller("imageboxCtrl",function($scope,$rootScope){
  $scope.value=$rootScope.data;
  console.log("imageboxCtrl");
  console.log($rootScope.data);
})
