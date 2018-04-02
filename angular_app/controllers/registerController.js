app.controller("registerCtrl",function($scope,$rootScope)
{
$scope.register=function(name,password)
{
  $rootScope.name=name;
  $rootScope.password=password;
};
});

// app.controller("registerCtrl",function($scope,$rootScope,$http)
// {
//   $http.get("NamePassword.json").then(function(response)
// {
//   $scope.json=response.data.Logins;
// });
// $scope.register=function(name,password)
// {
//   $scope.object={"Name":name,"Password":password};
//   $http.post("/home/bridgeit/Documents/angular_app/NamePassword.json",$scope.data);
// };
// });
