app.controller("dashboardCtrl",function($scope,$stateParams,$rootScope,$mdDialog){

  $rootScope.user={"Username":$stateParams.Username , "Password":$stateParams.Password};

  $scope.mobileDetails = function(mobile) {
    $rootScope.data=mobile;
    console.log($rootScope.data);
    // $scope.imagePath=mobile.image.large;
     $mdDialog.show({
       controller: DialogController,
       templateUrl: "templates/imagebox.html",
       // parent: angular.element(document.body),
       // targetEvent: event,
       clickOutsideToClose:true
       // fullscreen: $scope.customFullscreen
     })
   };

   function DialogController($scope){
     $scope.imageData=$rootScope.data;
   }
});
