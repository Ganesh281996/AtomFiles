app.controller("homeCtrl",function($scope,readJsonService,$mdSidenav){

  $scope.array=[];

  $scope.mobiles=readJsonService.readJson();
  $scope.mobiles.then(function(response){
  $scope.mobiles=response.data;

    angular.forEach($scope.mobiles,function(value,key){
      $scope.array.push(value.specs.manufacturer);
      $scope.manufacturer = $scope.array.filter(function(elem,index,self){
        return index == self.indexOf(elem);
      })
    });

$scope.array=[];

  angular.forEach($scope.mobiles,function(value,key){
    $scope.array.push(value.specs.os);
    $scope.os = $scope.array.filter(function(elem,index,self){
      return index == self.indexOf(elem);
    })
  });

$scope.array=[];

    angular.forEach($scope.mobiles,function(value,key){
      $scope.array.push(value.specs.camera);
      $scope.camera = $scope.array.filter(function(elem,index,self){
        return index == self.indexOf(elem)
      })
    });

$scope.array=[];

      angular.forEach($scope.mobiles,function(value,key){
        $scope.array.push(value.specs.storage);
        $scope.storage = $scope.array.filter(function(elem,index,self){
          return index == self.indexOf(elem)
        })
      });

})

$scope.toggleLeft = buildToggler('left');

   function buildToggler(componentId) {
     return function() {
       $mdSidenav(componentId).toggle();
     };
   }
})


// app.filter('unique', function() {
//     return function(collection, primaryKey) {
//       var output = [],
//           keys = [];
//           var splitKeys = primaryKey.split('.');
//
//       angular.forEach(collection, function(x) {
//             var key = {};
//             angular.copy(x, key);
//             for(var i=0; i<splitKeys.length; i++){
//                 key = key[splitKeys[i]];
//             }
//
//             if(keys.indexOf(key) === -1) {
//               keys.push(key);
//               output.push(x);
//             }
//       });
//
//       return output;
//     };
// });
