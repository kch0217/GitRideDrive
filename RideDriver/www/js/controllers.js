angular.module('starter.controllers', [])

.controller('signCtrl', function($scope, $state,$ionicPopup, LoopBackAuth, userRegister, pushRegister, $ionicHistory, $localstorage, LoginService, $ionicLoading, loadingService){

  $scope.signin = function(info){
    loadingService.start($ionicLoading);
    console.log('Test');
    console.log(info.email);
    console.log(info.password);

    LoginService.login(info).then(function(value){
      userRegister.register();
      pushRegister.register();
      $localstorage.setObject('userInfo',{'email':info.email, 'pw': info.password});

      return LoginService.getGenderPreference();

    }).then(function(value){
      $localstorage.set('genderPreference', value.status);
      $state.go('tab.gohome');
    }).catch(function(error){
      var alertPopup = $ionicPopup.alert({
        title: 'Error',
        template: 'Unable to login'
      });
      alertPopup.then(function(res) {
        console.log('Error to login');
      });
    }).finally(function(){
      loadingService.end($ionicLoading);
    });

    
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


.controller('registerCtrl',function($scope, $ionicPopup, $ionicHistory, LoginService, commonCallback, $ionicLoading, loadingService){
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
    loadingService.end($ionicLoading);
    console.log($scope.info.carNo);

    var confirmPopup = $ionicPopup.confirm({
     title: 'Confirm you application',
     template: 'Do you want to submit the data?'
    });

    var datasent = { "first_name": $scope.info.firstname,
                        "last_name": $scope.info.lastname,
                        "phone_number": parseInt($scope.info.phonenumber),
                        "gender": $scope.info.gender,
                        "gender_preference": 0,
                        "authorized": 'no',
                        "isDriver": $scope.numOfCar>0? 'yes': 'no',
                        "email": $scope.info.email,
                        "password": $scope.info.password,
                        "car": $scope.info.carNo
                      };

    confirmPopup.then(function(res) {
      console.log(res);
      if(res) {
       //submit


       
      console.log(datasent);

      return LoginService.validation(datasent);


      } else {
      return commonCallback.emptyErrorHandling();  
      }

    }).then(function(value){
      console.log(value);
      if (value.status =='success'){

      return LoginService.register(datasent);
      }
      else{
        var alertPopup = $ionicPopup.alert({
          title: 'Error',
          template: 'Please check your information.'
        });
        alertPopup.then(function(res) {
        
        });
        return commonCallback.emptyErrorHandling();
      }

    }).then(function(value){
      return $ionicPopup.alert({
           title: 'Done',
           template: 'Please activate your account from your email.'
      });

    }).then(function(value){
      $ionicHistory.goBack();
    }).catch(function(error){
      console.log(error);
    }).finally(function(){
      loadingService.end($ionicLoading);
    });


  }

  $scope.reset = function(){
    $scope.numOfCar = 0;
    $scope.carLicence = [];
    $scope.info = { 'carNo':[], 'gender': 'male'};
    

  }
})

.controller('goHomeCtrl',function($scope, $state, $ionicHistory, $ionicPopup, Member, pushRegister, licencesManager, $localstorage, commonCallback, RideRequestService){
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
        
        var targetTime = new Date();
        targetTime.setMinutes(parseInt(targetTime.getMinutes())+ $scope.time);
        // console.log(targetTime.toJSON());
        console.log(targetTime);
        $scope.genderPreferred = $localstorage.get("genderPreference", "false");

        var info = {
          "license_number": $scope.licence,
          "beforeArrive": $scope.time,
          "seat_number": $scope.numOfPassenger,
          "destination_name": destination,
          "time": targetTime.toJSON(),
          "gender_preference": ($scope.genderPreferred === "true")
        };
        return RideRequestService.addRide(info);
        

     } else {
       return commonCallback.emptyErrorHandling();
     }
   }).then(function(value){
    console.log(value);
    console.log(value.status.matchicon);
    $state.go('tab.gohome_ready',{"licence":$scope.licence,"minute":$scope.time,'location': $scope.pickUpPt, 'destination': destination, 'matchicon': value.status.matchicon});

   }).catch(function(error){
    console.log(error);
   });


  }

  // $ionicHistory.nextViewOptions({
  //   disableBack: true
  // });


  $scope.time = 7;
  $scope.modifyTime = function(value){
    if ($scope.time + value > 1)
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


  $scope.pickUpPts = [ "North Gate", "South Gate"];



})

.controller('goHomeMatchCtrl', function($scope, $stateParams, $ionicHistory, $state, $timeout, Ride){
  $scope.licence = $stateParams.licence;
  $scope.time = $stateParams.minute;
  $scope.location = $stateParams.location;
  $scope.destination = $stateParams.destination;
  $scope.matchicon = parseInt($stateParams.matchicon);
  $scope.doneCounting = false;


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

  $scope.cancelOffer = function(){
    Ride.cancelRide(function(value, response){
      console.log(value);
    });
    $ionicHistory.goBack();
  }

  $scope.chat = function(){
    $state.go('tab.gohome_chat',{'id':'012'});
  }

  $scope.countDownFinish = function(){
    $scope.doneCounting = true;
  }

  $scope.$on("$ionicView.enter", function(scopes, states){
    if($scope.matchicon < 10)
      $scope.imglocation = "img/icon_00" + $scope.matchicon + ".png";
    else
      $scope.imglocation = "img/icon_0" + $scope.matchicon + ".png";

    $scope.counter = $timeout($scope.countDownFinish, 1000*60*$scope.time);
    
  });



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
        if (destination == 'Hang Hau'){
          $scope.pickUpPt = $scope.pickUpPts[0];
        }
        else
          $scope.pickUpPt = $scope.pickUpPts[1];
        
        var targetTime = new Date();
        targetTime.setMinutes(parseInt(targetTime.getMinutes())+ $scope.time);
        // console.log(targetTime.toJSON());
        console.log(targetTime);
        $scope.genderPreferred = $localstorage.get("genderPreference", "false");

        var info = {
          "license_number": $scope.licence,
          "beforeArrive": $scope.time,
          "seat_number": $scope.numOfPassenger,
          "destination_name": destination,
          "time": targetTime.toJSON(),
          "gender_preference": ($scope.genderPreferred === "true")
        };
        return RideRequestService.addRide(info);
        

     } else {
       return commonCallback.emptyErrorHandling();
     }
   }).then(function(value){
    console.log(value);
    console.log(value.status.matchicon);
    $state.go('tab.gohome_ready',{"licence":$scope.licence,"minute":$scope.time,'location': $scope.pickUpPt, 'destination': destination, 'matchicon': value.status.matchicon});

   }).catch(function(error){
    console.log(error);
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


.controller("modifyLicenceCtrl", function($scope, $ionicModal, licencesManager, Member){
  //should be obtained from server

  // $scope.carInfo = [{"license_number": "AX123", "color": "red", "maker": "world"},
  //                   {"license_number": "B2331", "color": "yellow", "maker": "Toy"}];
  $scope.carInfo = licencesManager.getAll();
  


  $scope.setting = { "showDelete" : false};

  $scope.selected = -1;

  $scope.deleting =false;

//1 :add, 2: modify, 3: delete


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

    $scope.chosen = {"license_number": "", "color": "", "maker": "", "id": null};
    if (carIndex != -1){
      $scope.chosen.license_number = $scope.carInfo[$scope.selected].license_number;
      $scope.chosen.color = $scope.carInfo[$scope.selected].color;
      $scope.chosen.maker = $scope.carInfo[$scope.selected].maker;
      $scope.chosen.id = $scope.carInfo[$scope.selected].id;
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
    $scope.copyToPending();
    $scope.updateLocalList();
  }

  $scope.copyToPending = function(){
    console.log($scope.carInfo);
    $scope.pendingcarInfo = [];
    for (var i=0; i< $scope.carInfo.length; i++){

      var aRecord = {"id": $scope.carInfo[i].id, "license_number": $scope.carInfo[i].license_number, "color": $scope.carInfo[i].color, "maker": $scope.carInfo[i].maker};
      console.log(aRecord);
      $scope.pendingcarInfo.push(aRecord);
    }

    console.log($scope.pendingcarInfo);


  }

  $scope.updateLocalList = function(){
    if ($scope.selected != -1){

        $scope.pendingcarInfo[$scope.selected].license_number = $scope.chosen.license_number;
        $scope.pendingcarInfo[$scope.selected].color = $scope.chosen.color;
        $scope.pendingcarInfo[$scope.selected].maker = $scope.chosen.maker;
        console.log($scope);
      }
      else
      {
        $scope.pendingcarInfo.push($scope.chosen);
        
        // $scope.chosen.license_number = "";
        // $scope.chosen.color = "";
        // $scope.chosen.maker = "";
      }
      
      
      console.log($scope.pendingcarInfo);
      $scope.updatelist();
      

  }

  $scope.deleteStatus = function(index){
    $scope.deleting = true;
    $scope.selected = index;
  }

  $scope.verifyDeleteEmpty = function(){
    if ($scope.carInfo.length ==1){
      return false;
    }
  }

  $scope.updatelist = function(){
    console.log($scope.pendingcarInfo);
    var flag;
    var tobeSent;

    if ($scope.action==="Edit" && !$scope.deleting){
      flag = 2;
      tobeSent = $scope.pendingcarInfo[$scope.selected];

    } else if ($scope.action == "Create" && !$scope.deleting){
      flag = 1;
      tobeSent = $scope.pendingcarInfo[$scope.pendingcarInfo.length -1];
    }
    else{
      flag = 3;
      tobeSent = $scope.pendingcarInfo[$scope.selected];
    }
    console.log("Changin vehicle",  tobeSent);
    Member.updateVehicle({ "flag": flag, "car": tobeSent },function(value, responseheader){
      console.log(value);
      if (value.status =="fail"){
        
        return false;
      }
      else{

        $scope.carInfo = $scope.pendingcarInfo;
        console.log($scope.deleting);
        if ($scope.selected == -1 && $scope.deleting ==false){
          $scope.carInfo[$scope.carInfo.length-1].id = Number(value.status);
        }
        
        
        $scope.chosen = {"license_number": "", "color": "", "maker": "", "id": null};
        $scope.closeModal();
        $scope.selected = -1;
        $scope.deleting =false;
        $scope.action = "";
        console.log($scope.carInfo);
        licencesManager.getLicenceFromServer(null);
        return true;
        
      }
        
    }, function(error){

    });
  }

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

});
