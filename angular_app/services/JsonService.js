app.service('JsonService', function($http) {
  return {
    read: function() {
      return $http.get("NamePassword.json")
      .then(function(response) {
        return response;
      });
    }
  };
});
// app.service("JsonService",function($http)
// {
//   this.read=function(a)
//   {
//     console.log("fgdfdfhgbd");
//     $http.get("NamePassword.json").then(function(response)
//   {
//     console.log(response);
//     return response.data.Logins;
//   })
// };
// })
 //    this.read = function (x) {
 //      $http.get("NamePassword.json")
 //      .then(function(response) {
 //     var myWelcome = response;
 // });
 //        return x;
 //    }
