var app = angular.module("myApp", []);
app.controller('demoController', function($scope){
//initial items
$scope.items=[];

//Function to add an item
$scope.add = function(){
    var dupe = $scope.input;
    var array = $scope.items;
    for (var i=0;i<array.length;i++){
        if(dupe==array[i]){
            alert("This data already exist. Please enter a different data!!!");
            return;
        }
    }
    $scope.items.push($scope.input);
};



// remove an item
$scope.remove = function(index) {
    $scope.items.splice(index, 1);
};

});