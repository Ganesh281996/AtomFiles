app.controller("loginCtrl",function($scope,$state){
  $scope.link=function(userName,password){
    $scope.user={"Username":userName,"Password":password};
    $state.go("home.dashboard",$scope.user);
  };
})
