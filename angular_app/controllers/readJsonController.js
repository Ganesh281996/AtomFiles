app.controller("readJsonCtrl",function($scope,JsonService)
{
  $scope.jsonRead=function(){
    $scope.name="1234";
    $scope.json = JsonService.read();

    $scope.json
    .then(function(response) {
        $scope.json=response.data;
    });
    
    // console.log("coming from controller", response.data);
    // console.log($scope.json);
  }
});
