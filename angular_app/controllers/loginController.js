app.controller('loginCtrl', function($scope,$rootScope)
{
$scope.login=function(name1,password1)
{
  if((name1==$rootScope.name) && (password1==$rootScope.password))
  {
    $scope.result=name1+" "+password1;
  }
  else
  {
    $scope.result="Failed";
  }
}
});
