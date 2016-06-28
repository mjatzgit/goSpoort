'use strict';
/**********************************************************************
 * goSpoort Application
 **********************************************************************/
 angular.module('FilterController', [])
 

 .controller('FilterController', function ( $scope, traineeService  ) {
 
    //-- vars ---------------------------------------

    $scope.location =  ['Outdoor', 'Indoor']
    $scope.disciplines = []
    $scope.selectedDisciplines = []
    $scope.trainers = []

    //-- get all trainers from source ----------------------
    traineeService.get().success(function(data){
        var trainers = data;
        $scope.trainers = data;
        
        // loop all trainee
        angular.forEach(trainers, function(trainersObj, key){
            // console.log(coachObj);

            // Create the list of all available sport Type / disciplines
            angular.forEach(trainersObj.discipline, function(val, key){

                // but dont add dublicates
                if ($scope.disciplines.indexOf(val) == -1) {
                    $scope.disciplines.push(val);
                }

            });
        });
        // console.log( $scope.disciplines );
    });

    // does the item exists in list
    $scope.exists = function (item, list) {
        // console.log(item);
        // console.log(list);
        return list.indexOf(item) > -1;
    };


    // Disciplines =============================================================
    $scope.filterDisciplines = function(selectedDisciplines) {

        return function( trainer ) {

            var trainerHasDiscipline = false;

            if(selectedDisciplines.length !== 0) {

                angular.forEach(selectedDisciplines, function(item, key){

                    if( trainer.discipline.indexOf(item) > -1){

                        trainerHasDiscipline = true;

                    }
                })

                // return result
                if(trainerHasDiscipline){
                    return true;
                }

            } else if(selectedDisciplines.length == 0) {
              return true;

            } else {

                return false;

            } 
        };
    };

    $scope.toggleDisciplines = function (discipline) {

        var idx = $scope.selectedDisciplines.indexOf(discipline);

        if (idx > -1) {
            $scope.selectedDisciplines.splice(idx, 1);
        }
        else {
            $scope.selectedDisciplines.push(discipline);
        }
        //console.log($scope.selectedDisciplines);
    };
})

.service('traineeService', function($http) {
    return {
        get : function() {
            return $http.get('/data/source.json');
        }
    }
});