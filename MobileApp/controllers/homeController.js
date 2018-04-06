app.controller("homeCtrl",function($scope,$rootScope,$mdSidenav){

// $scope.changeApple=function(){
// $scope. $rootScope.json;
// };
//
// $scope.toggleLeft=toggler("left");
// function toggler (component){
// return function(){
//   $mdSidenav(component).toggle();
// };
// }

$scope.toggleLeft = buildToggler('left');
   $scope.toggleRight = buildToggler('right');

   function buildToggler(componentId) {
     return function() {
       $mdSidenav(componentId).toggle();
     };
   }

})
