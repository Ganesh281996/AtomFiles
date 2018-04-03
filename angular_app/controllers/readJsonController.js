app.controller("readJsonCtrl",function($scope,JsonService)
{
  $scope.jsonRead=function(){
    $scope.json = JsonService.read();

    $scope.json
    .then(function(response) {
        $scope.json=response.data;
    });
  }
});

    // console.log("coming from controller", response.data);
    // console.log($scope.json);
    // $scope.name="1234";
