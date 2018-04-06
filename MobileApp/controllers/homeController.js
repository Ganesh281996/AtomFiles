app.controller("homeCtrl",function($scope,$rootScope,$mdSidenav){

$scope.toggleLeft = buildToggler('left');
   $scope.toggleRight = buildToggler('right');

   function buildToggler(componentId) {
     return function() {
       $mdSidenav(componentId).toggle();
     };
   }
 })

// $scope.manufacturer=$rootScope.json.specs.manufacturer;
// console.log(manufacturer);
// $scope.manufacturer={};
// for(var i=0;i<$rootScope.json.length;i++)
// {
//   $scope.manufacturer.push($rootScope.json.specs[i]);
// }
// console.log($scope.manufacturer);
//
// app.filter("filterManufacturer",function(){
//   return function(){
//
//   }
// })
