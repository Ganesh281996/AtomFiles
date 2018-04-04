app.controller("loginCtrl",function($scope,$state){
  $scope.link=function(userName,password){
    console.log(userName);
    $scope.user="Username="+userName+"  Password="+password;
    console.log($scope.user);
    $state.go("dashboard",$scope.user);
  };
})
