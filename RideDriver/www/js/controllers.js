angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})



.controller('signCtrl', function($scope, $state, Member,$ionicPopup, loadingService, $ionicLoading, LoopBackAuth, userRegister, pushRegister){

  $scope.signin = function(){
    console.log('Test');
    loadingService.start($ionicLoading);
    
    Member.login({"email": this.email, "password": this.password}, function(content, code){
      //success
      userRegister.register();
      pushRegister.register();
      // console.log(pushRegister.token);
      // Member.updateToken(pushRegister.token, function(value, responseheaders){
      //   console.log(value);
      // }, function(error){

      // });
      loadingService.end($ionicLoading);
      $state.go('tab.gohome',{},{reload:true});
    }, function(error){
      //fail
      loadingService.end($ionicLoading);
      var alertPopup = $ionicPopup.alert({
        title: 'Error',
        template: 'Unable to login'
      });
      alertPopup.then(function(res) {
        console.log('Error to login');
      });
    });

//to be deleted
    // $state.go('tab.gohome',{},{reload:true});
    
  }

  $scope.register = function(){
    $state.go('register');
  }
})


.controller('registerCtrl',function($scope, $ionicPopup, $ionicHistory, Member){
  $scope.numOfCar = 0;
  $scope.carLicence = [];
  $scope.info = { 'carNo':[],'gender': 'male'}

  

  $scope.checkCar = function(){
    console.log("click check car");

    
    if ($scope.info.haveCar){
      $scope.numOfCar = 1;
      $scope.carLicence.push('');
      
      $scope.info.carNo.push('');
      console.log($scope.carLicence);
    }
    else{
      $scope.numOfCar = 0;
      $scope.carLicence = [];
    }
  }

  $scope.addCar = function(){
    if ($scope.info.haveCar){
      console.log("click add car");
      $scope.numOfCar++;
      $scope.carLicence.push('');
    }
  }

  $scope.removeCar = function(){
    if ($scope.info.haveCar && $scope.numOfCar > 1){
      console.log("click remove car");
      $scope.numOfCar--;
      $scope.carLicence.splice(-1,1);
    }
  }

  $scope.confirm = function(){
    // A confirm dialog
    console.log($scope.info.carNo);

   var confirmPopup = $ionicPopup.confirm({
     title: 'Confirm you application',
     template: 'Do you want to submit the data?'
   });
   confirmPopup.then(function(res) {
     if(res) {
       //submit


       var datasent = { "first_name": $scope.info.firstname,
                        "last_name": $scope.info.lastname,
                        "phone_number": parseInt($scope.info.phonenumber),
                        "gender": $scope.info.gender,
                        "gender_preference": 'no',
                        "authorized": 'no',
                        "isDriver": $scope.numOfCar>0? 'yes': 'no',
                        "email": $scope.info.email,
                        "password": $scope.info.password,
                        "car": $scope.info.carNo
                      };

      Member.register(datasent, function(content){
        console.log(content);
        var alertPopup = $ionicPopup.alert({
         title: 'Done',
         template: 'Please activate your account from your email.'
       });
       alertPopup.then(function(res) {
         $ionicHistory.goBack();
       });
      }, function(error){
        console.log(error);

      })

     } else {
       
     }
   });


  }

  $scope.reset = function(){
    $scope.numOfCar = 0;
    $scope.carLicence = [];
    $scope.info = { 'carNo':[], 'gender': 'male'};
    

  }
})

.controller('goHomeCtrl',function($scope, $state, $ionicHistory, Ride, Own, Request){
  $scope.ready = function(destination){

    if (destination == 'Hang Hau'){
      $scope.pickUpPt = $scope.pickUpPts[0];
    }
    else
      $scope.pickUpPt = $scope.pickUpPts[1];
    // $scope.test();
    Ride.addRide({
      "license_number": $scope.licence,
      "beforeArrive": $scope.time,
      "seat_number": $scope.numOfPassenger,
      "destination_name": destination
    }, function(value, responseheaders){
//test
      // console.log(value.status);
      // Request.push(value.status, function(value2, responseheaders){
      //   console.log(value2);
      // }, function(error){
      //   console.log(error);
      // });


    }, function(error){

    });
    $state.go('tab.gohome_ready',{"licence":$scope.licence,"minute":$scope.time,'location': $scope.pickUpPt, 'destination': destination});
  }

  // $ionicHistory.nextViewOptions({
  //   disableBack: true
  // });


  $scope.time = 7;
  $scope.modifyTime = function(value){
    if ($scope.time + value > 0)
      $scope.time = $scope.time + value;
  }

  $scope.numOfPassenger = 2;
  $scope.modifyPassenger = function(value){
    if ($scope.numOfPassenger + value > 0)
      $scope.numOfPassenger += value;
  }

  //testing, should be loaded from server
  // $scope.licences = ["AX123", "BX546", "WT369", "GG789"];
  
  Own.getVehicle(function(value, responseheaders){
    console.log(value);
    $scope.licences = value.vehicle;
    $scope.licence = $scope.licences[$scope.licenceIndex];
  }, function(error){

  });


  $scope.licenceIndex = 0;
  
  $scope.changeLicence = function(value){
    if ($scope.licenceIndex + value < 0)
      $scope.licenceIndex = $scope.licences.length-1;
    else if ($scope.licenceIndex + value >= $scope.licences.length)
      $scope.licenceIndex = 0;
    else
      $scope.licenceIndex += value;
    $scope.licence = $scope.licences[$scope.licenceIndex];
  }

  //testing, should be loaded from server
  $scope.pickUpPts = [ "North Gate", "South Gate"];
  // $scope.pickUpIndex = 0;
  // $scope.pickUpPt = $scope.pickUpPts[$scope.pickUpIndex];
  // $scope.changePickUpPt = function(value){
  //   if ($scope.pickUpIndex + value < 0)
  //     $scope.pickUpIndex = $scope.pickUpPts.length-1;
  //   else if ($scope.pickUpIndex + value >= $scope.pickUpPts.length)
  //     $scope.pickUpIndex = 0;
  //   else
  //     $scope.pickUpIndex += value;
  //   $scope.pickUpPt = $scope.pickUpPts[$scope.pickUpIndex];
  // }



})

.controller('goHomeMatchCtrl', function($scope, $stateParams, $ionicHistory, $state){
  $scope.licence = $stateParams.licence;
  $scope.time = $stateParams.minute;
  $scope.location = $stateParams.location;
  $scope.destination = $stateParams.destination;



  $scope.goBack = function() {
    //contact the server to call off the ride
    console.log("Back");
    $ionicHistory.goBack();
  };

  $scope.chat = function(){
    $state.go('tab.gohome_chat',{'id':'012'});
  }



})

.controller('timeCtrl', function($scope, $timeout){
  var timeInSec = this.time*60;
  $scope.displayTime = null;


  

  $scope.startTime = function(){
    if (timeInSec > 0){
      timeInSec--;
      var min = Math.floor(timeInSec/60);
      var sec = timeInSec %60

      if (sec <10)
        sec = '0' + sec;
      $scope.displayTime = min + ' : ' + sec;

      $timeout($scope.startTime, 1000);
    }
    
  }



})

.controller('forgetCtrl', function($scope){

})




.controller('SettingCtrl', function($scope, $ionicHistory, $state, Member, pushRegister){
  $scope.logout = function(){
    Member.logout({}, function(value, responseheader){
      pushRegister.unregister();
      $state.go('signIn');
    }, function(error){
      console.log('fail to logout');

    })
    
  }
});
