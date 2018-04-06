app.service("readJsonService",function($http){
  return{
    readJson:function(){
      return $http.get("products.json")
      .then(function(response){
        return response;
      });
    }
  };
});
