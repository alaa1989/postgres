    var sampleApp = angular.module('sampleApp', []);

     //function to add -->sends query to the model 
     var add_record = function($scope, $http){
        var req_url;
        console.log($scope.formData);
            req_url = $http.post('/addrecord', $scope.formData);
    }

    //child controller -- > will take care of the various calls to instructor, student etc.

    sampleApp.controller('mainCtrl', ['$scope','$http', function($scope, $http){

    //Executed to POST data entered in add record form
        $scope.add = function(){
            add_record($scope, $http);
        }

       }]);