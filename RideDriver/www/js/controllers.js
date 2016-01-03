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



.controller('signCtrl', function($scope, $state, Member,$ionicPopup, loadingService, $ionicLoading, LoopBackAuth, userRegister, pushRegister, $ionicHistory, $localstorage){

  $scope.signin = function(info){
    console.log('Test');
    loadingService.start($ionicLoading);
    console.log(info.email);
    console.log(info.password);
    
    Member.login({"email": info.email, "password": info.password}, function(content, code){
      //success
      userRegister.register();
      pushRegister.register();
      // console.log(pushRegister.token);
      // Member.updateToken(pushRegister.token, function(value, responseheaders){
      //   console.log(value);
      // }, function(error){

      // });
      $localstorage.setObject('userInfo',{'email':info.email, 'pw': info.password});
      
      Member.getGenderPreference(function(value, responseheader){
        loadingService.end($ionicLoading);
        $localstorage.set('genderPreference', value.status);
        $state.go('tab.gohome');
      }, function(error){
        console.log(error);
        loadingService.end($ionicLoading);
      });
      
      

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

  $scope.$on("$ionicView.enter", function(scopes, states){
    $ionicHistory.clearHistory();
    $ionicHistory.clearCache();
    var user = $localstorage.getObject('userInfo');
    if (user == null)
      return;
    if (!(user.email ==null || user.pw == null)){
      $scope.signin({"email": user.email, "password": user.pw});
    }

    console.log("Go to login page");
  });


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

      Member.validationandregister(datasent, function(content, responseheader){
        console.log(content);
        if (content.status =='success'){
          var alertPopup = $ionicPopup.alert({
           title: 'Done',
           template: 'Please activate your account from your email.'
         });
         alertPopup.then(function(res) {
           $ionicHistory.goBack();
         });
       }else
       {
          var alertPopup = $ionicPopup.alert({
           title: 'Error',
           template: 'Please check your information.'
         });
         alertPopup.then(function(res) {
           
         });
       }
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

.controller('goHomeCtrl',function($scope, $state, $ionicHistory, Ride, Own, Request, $ionicPopup, Member, pushRegister, licencesManager, $localstorage){
  $scope.ready = function(destination){
    var confirmPopup = $ionicPopup.confirm({
     title: 'Confirm',
     template: 'Are you sure you are heading to '+ destination+'?'
   });

   confirmPopup.then(function(res) {
     if(res) {
        console.log('You are sure');
        if (destination == 'Hang Hau'){
          $scope.pickUpPt = $scope.pickUpPts[0];
        }
        else
        $scope.pickUpPt = $scope.pickUpPts[1];
        // $scope.test();
        var targetTime = new Date();
        targetTime.setMinutes(parseInt(targetTime.getMinutes())+ $scope.time);
        // console.log(targetTime.toJSON());
        console.log(targetTime);
        $scope.genderPreferred = $localstorage.get("genderPreference", "false");
        Ride.addRide({
        "license_number": $scope.licence,
        "beforeArrive": $scope.time,
        "seat_number": $scope.numOfPassenger,
        "destination_name": destination,
        "time": targetTime.toJSON(),
        "gender_preference": ($scope.genderPreferred === "true")
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

     } else {
       return;
     }
   });


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

  var checkVehicle = function(){

    $scope.licences = licencesManager.getLicence();
    console.log($scope.licences);
    if ($scope.licences.length ==0){
      var alertPopup = $ionicPopup.alert({
         title: 'Error',
         template: 'You should use the passenger version.'
       });
       alertPopup.then(function(res) {
          Member.logout({}, function(value, responseheader){
            pushRegister.unregister();
            $localstorage.setObject('userInfo', null);
            $ionicHistory.goBack();
          }, function(error){
            console.log('fail to logout');

          })

       });
    }
    else
      $scope.licence = $scope.licences[$scope.licenceIndex];
  }

  licencesManager.getLicenceFromServer(checkVehicle);


  
  // Own.getVehicle(function(value, responseheaders){
  //   console.log(value.vehicle);
  //   if (value.vehicle.length==0){
  //     var alertPopup = $ionicPopup.alert({
  //        title: 'Error',
  //        template: 'You should use the passenger version.'
  //      });
  //      alertPopup.then(function(res) {
  //         Member.logout({}, function(value, responseheader){
  //           pushRegister.unregister();
  //           $ionicHistory.goBack();
  //         }, function(error){
  //           console.log('fail to logout');

  //         })

  //      });
  //   }
  //   $scope.licences = value.vehicle;
  //   $scope.licence = $scope.licences[$scope.licenceIndex];
  // }, function(error){
  //   console.log(error);

  // });


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

  var targetTime = new Date();
  console.log($scope.time);
  console.log(targetTime.getMinutes());
  console.log(targetTime);
  targetTime.setMinutes(parseInt(targetTime.getMinutes())+ parseInt($scope.time));
  console.log(targetTime);


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
      var sec = Math.floor(timeInSec %60);

      if (sec <10)
        sec = '0' + sec;
      $scope.displayTime = min + ' : ' + sec;

      $timeout($scope.startTime, 1000);
    }
    
  }



})

.controller('forgetCtrl', function($scope, Member, $ionicPopup, $ionicHistory){
  $scope.sendForget = function(email){
    console.log(email);
    Member.resetPw({'email': email}, function(value, responseheader){
      console.log(value);
      var alertPopup = $ionicPopup.alert({
        title: 'Done',
        template: 'Please check your email account.'
      });
      alertPopup.then(function(res) {
        $ionicHistory.goBack();
      });

    }, function(error){

      console.log(error);
      var alertPopup = $ionicPopup.alert({
        title: 'Error',
        template: 'Email does not exist.'
      });
      alertPopup.then(function(res) {
        $ionicHistory.goBack();
      });
    });
  };

  // Member.resetPassword({'email': 'testing@gmail.com'});
})




.controller('SettingCtrl', function($scope, $ionicHistory, $state, Member, pushRegister, $localstorage){
  



  $scope.logout = function(){
    Member.logout({}, function(value, responseheader){
      pushRegister.unregister();
      $localstorage.setObject('userInfo', null);
      $localstorage.set('genderPreference', null);
      $state.go('signIn');

    }, function(error){
      console.log('fail to logout');

    })
    
  }

  $scope.setting = {"sameGender": false}

  $scope.changePW = function(){
    $state.go("tab.setting_change_PW");

  }

  $scope.changeCar = function(){
    $state.go("tab.setting_change_car");
  }

  $scope.saveSettings = function(genderPreferred){
    console.log(genderPreferred);
    $localstorage.set('genderPreference', genderPreferred);
    Member.setGenderPreference({'gender_preference': genderPreferred}, function(value, responseheader){
      console.log(value);
    }, function(error){

    });
  }

  $scope.$on("$ionicView.enter", function(scopes, states){

    $scope.setting.sameGender = $localstorage.get('genderPreference', "false");
    if ($scope.setting.sameGender == null){
      $scope.setting.sameGender = "false";
      console.log("null gender preference");
    }
    if ($scope.setting.sameGender ==="true")
      $scope.setting.sameGender = true;
    else
      $scope.setting.sameGender = false;

    var user = $localstorage.getObject('userInfo');
    $scope.username = user.email;
    
  });
})


.controller('changePWCtrl', function($scope, Member, $ionicHistory, $ionicPopup, $ionicLoading, loadingService){
  
  $scope.sendPW = function(){

    loadingService.start($ionicLoading);
    Member.updatePw({'oldpassword': this.info.oldpw, 'newpassword': this.info.newpw}, function(value, responseheader){
      console.log(value);
      if (value.status == 'fail'){
        var alertPopup = $ionicPopup.alert({
         title: 'Error',
         template: 'Password cannot be changed.'
       });
       alertPopup.then(function(res) {
       });
       
      }else{
        var alertPopup = $ionicPopup.alert({
           title: 'Done',
           template: 'You can now use the new password.'
        });
        alertPopup.then(function(res) {
           $ionicHistory.goBack();
        });
      }
      loadingService.end($ionicLoading);

    }, function(error){
      var alertPopup = $ionicPopup.alert({
         title: 'Error',
         template: 'Password cannot be changed.'
       });
       alertPopup.then(function(res) {
       });
       loadingService.end($ionicLoading);

    })

  }


})


.controller('goustCtrl', function($scope, $ionicPopup, Ride, licencesManager, $state){
  $scope.ready = function(destination){
    var confirmPopup = $ionicPopup.confirm({
     title: 'Confirm',
     template: 'Are you sure you are heading to HKUST through '+ destination +'?'
   });

   confirmPopup.then(function(res) {
     if(res) {
        console.log('You are sure');
        var targetTime = new Date();
        targetTime.setMinutes(parseInt(targetTime.getMinutes())+ $scope.time);
        // console.log(targetTime.toJSON());
        console.log(targetTime);
        Ride.addRide({
        "license_number": $scope.licence,
        "beforeArrive": $scope.time,
        "seat_number": $scope.numOfPassenger,
        "destination_name": destination,
        "time": targetTime.toJSON()
        }, function(value, responseheaders){


        }, function(error){

        });
        $state.go('tab.gohome_ready',{"licence":$scope.licence,"minute":$scope.time,'location': destination, 'destination': "HKUST"});

     } else {
       return;
     }
   });


  }

  $scope.licenceIndex = 0;

  $scope.licences = licencesManager.getLicence();
  $scope.licence = $scope.licences[$scope.licenceIndex];

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




  
  
  $scope.changeLicence = function(value){
    if ($scope.licenceIndex + value < 0)
      $scope.licenceIndex = $scope.licences.length-1;
    else if ($scope.licenceIndex + value >= $scope.licences.length)
      $scope.licenceIndex = 0;
    else
      $scope.licenceIndex += value;
    $scope.licence = $scope.licences[$scope.licenceIndex];
  }




})


.controller("modifyLicenceCtrl", function($scope, $ionicModal, licencesManager){
  //should be obtained from server

  // $scope.carInfo = [{"license_number": "AX123", "color": "red", "maker": "world"},
  //                   {"license_number": "B2331", "color": "yellow", "maker": "Toy"}];
  $scope.carInfo = licencesManager.getAll();
  console.log($scope.carInfo);


  $scope.setting = { "showDelete" : false};

  $scope.selected = -1;



  $ionicModal.fromTemplateUrl('templates/editACarModal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
  })  

  $scope.action = "";
  $scope.edit = function(carIndex) {
    console.log("press edit");
    $scope.selected = carIndex;

    $scope.chosen = {"license_number": "", "color": "", "maker": ""};
    if (carIndex != -1){
      $scope.chosen.license_number = $scope.carInfo[$scope.selected].license_number;
      $scope.chosen.color = $scope.carInfo[$scope.selected].color;
      $scope.chosen.maker = $scope.carInfo[$scope.selected].maker;
      $scope.action = "Edit";
    } else {
      $scope.action = "Create";
    }

    $scope.modal.show();
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.confirm = function(){
    console.log($scope.carInfo);
    if ($scope.selected != -1){
      $scope.carInfo[$scope.selected].license_number = $scope.chosen.license_number;
      $scope.carInfo[$scope.selected].color = $scope.chosen.color;
      $scope.carInfo[$scope.selected].maker = $scope.chosen.maker;
    }else
    {
      $scope.carInfo.push($scope.chosen);
      $scope.chosen = {"license_number": "", "color": "", "maker": ""};
      // $scope.chosen.license_number = "";
      // $scope.chosen.color = "";
      // $scope.chosen.maker = "";
    }
    // Member.updateVehicle(,function(){

    // }, function(){

    // });
    $scope.selected = -1;
    console.log($scope.carInfo);
  }

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

});
