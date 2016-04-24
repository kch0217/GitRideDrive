"use strict";
angular.module('starter.controllers', [])

.controller('signCtrl', function($scope, $state,$ionicPopup, userRegister, pushRegister, $ionicHistory, $localstorage, LoginService, $ionicLoading, loadingService, licencesManager, pushIDManager){

  $scope.signin = function(info){
    loadingService.start($ionicLoading);
    console.log(info.email);
    console.log(info.password);

    // connectDevice.register();

    LoginService.login(info).then(function(value){
      // userRegister.register();
      // pushRegister.register();
      pushIDManager.init();
      $localstorage.setObject('userInfo',{'email':info.email, 'pw': info.password});

      return LoginService.getGenderPreference();

    }).then(function(value){
      $localstorage.set('genderPreference', value.status);
      var previousInfo = $localstorage.getObject("matchInfo");
      var currentTime = new Date();
      var targetTime = new Date(previousInfo.endTime);
      var userinfo = $localstorage.getObject('userInfo');
      console.log(previousInfo);
      if (previousInfo == null || JSON.stringify(previousInfo) === "{}" || currentTime >= targetTime || userinfo.email !== previousInfo.owner)
        $state.go('tab.gohome');
      else if (previousInfo.destination === "HKUST"){
        licencesManager.getLicenceFromServer(null);
        $state.go('tab.gohkust_ready',{"licence":previousInfo.licence,"endTime":previousInfo.endTime,'location': previousInfo.location, 'destination': "HKUST", 'matchicon': previousInfo.matchicon, 'cancelTime': previousInfo.cancelTime, 'rideId': previousInfo.rideId});
      }
      else{
        licencesManager.getLicenceFromServer(null);
        $state.go('tab.gohome_ready',{"licence":previousInfo.licence,"endTime":previousInfo.endTime,'location': previousInfo.location, 'destination': previousInfo.destination, 'matchicon': previousInfo.matchicon, 'cancelTime': previousInfo.cancelTime, 'rideId': previousInfo.rideId});
      }
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

  // $scope.register = function(){
  //   $state.go('register');
  // }

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
    
    console.log($scope.info.carNo);

    var confirmPopup = $ionicPopup.confirm({
     title: 'Confirm you application',
     template: 'Do you want to submit the data?'
    });

    //handle the email
    if ($scope.info.hkustMember){
      $scope.info.email += "@ust.hk"
    }

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
      loadingService.start($ionicLoading);
      console.log(res);
      if(res) {
       //submit


       
      console.log(datasent);

      return LoginService.validation(datasent);


      } else {
      return commonCallback.emptyErrorHandling();  
      }

    }).then(function(value){
      loadingService.end($ionicLoading);
      console.log(value);
      if (value.status =='success'){
        if ($scope.info.hkustMember)

          return LoginService.register(datasent);
        else
          return LoginService.registerForNon(datasent);
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
      var alertPopup = $ionicPopup.alert({
          title: 'Error',
          template: 'Cannot register.'
      });
      alertPopup.then(function(res) {
        
      });
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

.controller('goHomeCtrl',function($scope, $state, $ionicHistory, $ionicPopup, Member, pushRegister, licencesManager, $localstorage, commonCallback, RideRequestService, safeChecking, QueueSeatProvider, RIDE_CONFIG, loadingService, $ionicLoading, errorBox){
  $scope.ready = function(destination){
    if (!safeChecking.safeToStart()){
      var warningPopup = $ionicPopup.alert({
         title: 'Error',
         template: 'You can only initiate one offer.'
       });
      warningPopup.then(function(res){

      }, function(error){

      });
      return;
    }
   //  var confirmPopup = $ionicPopup.confirm({
   //   title: 'Confirm',
   //   template: 'Are you sure you are heading to '+ destination+'?'
   // });

    var targetTime = null;


    // console.log('You are sure');
    if (destination == 'Hang Hau'){
      $scope.pickUpPt = $scope.pickUpPts[0];
    }
    else
      $scope.pickUpPt = $scope.pickUpPts[1];
    
    targetTime = new Date();
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
      "gender_preference": ($scope.genderPreferred === "true"),
      "leaveUst": true
    };

    loadingService.start($ionicLoading);
    RideRequestService.addRide(info).then(function(value){
      console.log(value);
      console.log(value.status.matchicon);
      safeChecking.start(0);
      var userinfo = $localstorage.getObject('userInfo');
      $scope.targetTime = new Date();
      $scope.targetTime.setMinutes(parseInt($scope.targetTime.getMinutes())+ parseInt($scope.time));
      
      var cancelTime = new Date();
      cancelTime.setMinutes(parseInt(cancelTime.getMinutes()) + 1);

      $localstorage.setObject('leavePreference', {"owner": userinfo.email, "licence": $scope.licence, "time": $scope.time, "seat_number": $scope.numOfPassenger});
      $localstorage.setObject('matchInfo', {"owner": userinfo.email, "licence":$scope.licence,"endTime":$scope.targetTime,'location': $scope.pickUpPt, 'destination': destination, 'matchicon': value.status.matchicon, 'cancelTime': cancelTime, 'rideId': value.status.rideId});
      $state.go('tab.gohome_ready',{"licence":$scope.licence,"endTime":$scope.targetTime,'location': $scope.pickUpPt, 'destination': destination, 'matchicon': value.status.matchicon, 'cancelTime': cancelTime, 'rideId': value.status.rideId});

   }).catch(function(error){
    console.log(error);
    errorBox.start();
   }).finally(function(){
    loadingService.end($ionicLoading);
   });


  }

  // $ionicHistory.nextViewOptions({
  //   disableBack: true
  // });


  $scope.time = RIDE_CONFIG.DEFAULT_TIME;
  $scope.modifyTime = function(value){
    if (($scope.time + value >= RIDE_CONFIG.MIN_TIME) && ($scope.time + value <= RIDE_CONFIG.MAX_TIME)){
      // console.log($scope.time + value);
      $scope.time = $scope.time + value;
    }
      
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
    else{
      var preference = $localstorage.getObject('leavePreference');
      var userinfo = $localstorage.getObject('userInfo');
      if (!(userinfo == null || JSON.stringify(userinfo) == "{}")){
        if (!(preference == null || JSON.stringify(preference) == "{}" || userinfo.email != preference.owner)){
          if ($scope.licences.indexOf(preference.licence) >= 0)
          {
            $scope.licenceIndex = $scope.licences.indexOf(preference.licence);
            $scope.licence = $scope.licences[$scope.licenceIndex];
          }
          else
            $scope.licence = $scope.licences[$scope.licenceIndex];
        }
        else
          $scope.licence = $scope.licences[$scope.licenceIndex];
      }
      else
        $scope.licence = $scope.licences[$scope.licenceIndex];
    }
      
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
  // var infoTimer;
  // $scope.showInfo = false;
  // var showInfoFunc = function(){
  //   $scope.showInfo = !$scope.showInfo;
  //   infoTimer = $timeout(showInfoFunc, 5000);
  // }
  $scope.$on("$ionicView.enter", function(scopes, states){
    QueueSeatProvider.clear();
    QueueSeatProvider.update(true, null);
    $scope.licences = licencesManager.getLicence();
    $scope.doRefresh();
    // RideRequestService.getQueueSeatNumber(true).then(function(value){
    //   console.log(value);
    //   $scope.statistics = value.num;
    // });
    safeChecking.end(0);
    var preference = $localstorage.getObject('leavePreference');
    var userinfo = $localstorage.getObject('userInfo');
    if (!(userinfo == null || JSON.stringify(userinfo) == "{}")){

      if (!(preference == null || JSON.stringify(preference) == "{}" || userinfo.email != preference.owner)){
        $scope.time = preference.time;
        console.log("Preference is ", preference.licence);
        $scope.numOfPassenger = preference.seat_number;
        // console.log($scope.licences.indexOf(preference.licence), $scope.licences);
        // if ($scope.licences.indexOf(preference.licence) >= 0)
        // {
        //   $scope.licenceIndex = $scope.licences.indexOf(preference.licence);
        //   $scope.licence = $scope.licences[$scope.licenceIndex];
        // }
      }
    }

    if ($scope.licences.length > 0 && $scope.licences.indexOf($scope.licence) < 0){
      $scope.licence = $scope.licences[0];
    }


    // infoTimer = $timeout(showInfoFunc, 5000);
  });

  $scope.doRefresh = function(){
    QueueSeatProvider.clear();
    QueueSeatProvider.update(true, null);
    $scope.$broadcast('scroll.refreshComplete', {"leaveUst": true});
    $scope.$apply();
  }



})

.controller('matchCtrl', function($scope, $stateParams, $ionicHistory, $state, $timeout, Ride, $localstorage, Join){
  $scope.licence = $stateParams.licence;
  $scope.targetTime = new Date($stateParams.endTime);
  $scope.location = $stateParams.location;
  $scope.destination = $stateParams.destination;
  $scope.rideId = $stateParams.rideId;
  $scope.matchicon = parseInt($stateParams.matchicon);
  $scope.doneCounting = false;
  var cancelTime = new Date($stateParams.cancelTime);
  $scope.cancelDisable = true;
  var counter;
  $scope.cancelCount = 0;
  $scope.numOfPassenger = 0;


  // $scope.targetTime = new Date();
  // console.log($scope.time);
  // console.log($scope.targetTime.getMinutes());
  // console.log($scope.targetTime);
  // $scope.targetTime.setMinutes(parseInt($scope.targetTime.getMinutes())+ parseInt($scope.time));
  // console.log($scope.targetTime);


  $scope.goBack = function() {
    //contact the server to call off the ride
    console.log("Back");
    $timeout.cancel(counter);
    $localstorage.setObject("matchInfo", {});
    var leaveoptions = true;
    if ($scope.destination ==="HKUST"){
      leaveoptions = false;
    }

    Ride.cancelRide({"leaveUst":leaveoptions, "byDriver": false}, function(value, response){
      console.log(value);
    });
    if ($scope.destination ==="HKUST"){
      $state.go("tab.gohkust");
    }
    else{
      $state.go("tab.gohome");
    }
    //$ionicHistory.goBack();
  };

  $scope.cancelOffer = function(){
    var leaveoptions = true;
    if ($scope.destination ==="HKUST"){
      leaveoptions = false;
    }
    Ride.cancelRide({"leaveUst":leaveoptions, "byDriver": true}, function(value, response){
      console.log(value);
    });
    $timeout.cancel(counter);
    $localstorage.setObject("matchInfo", {});
    if ($scope.destination ==="HKUST"){
      $state.go("tab.gohkust");
    }
    else{
      $state.go("tab.gohome");
    }
    // $ionicHistory.goBack();
  }


  $scope.countDownFinish = function(){
    
    var currentTime = new Date();
    console.log("Counting...");
    if ($scope.targetTime > currentTime){
      if (cancelTime < currentTime)
        $scope.cancelDisable = true;
      else{
        $scope.cancelDisable = false;
        $scope.cancelCount = Math.floor((cancelTime - currentTime)/1000);
      }

      counter = $timeout($scope.countDownFinish, 1000)
    }
    else{
      $scope.doneCounting = true;
    }
  }

  $scope.$on("$ionicView.loaded", function(scopes, states){
    if($scope.matchicon < 10)
      $scope.imglocation = "img/icon_00" + $scope.matchicon + ".png";
    else
      $scope.imglocation = "img/icon_0" + $scope.matchicon + ".png";

    counter = $timeout($scope.countDownFinish, 1000);
    console.log("Loaded");
    
  });

  $scope.$on('$destroy', function(){
    $timeout.cancel(counter);
  })

  $scope.$on('updatePassenger', function(event, args){
    console.log("received an update number of passenger");
    if (args.num != null){
      $scope.numOfPassenger = args.num;

    }
  })

  $scope.$on("$ionicView.enter", function(scopes, states){
    Join.getMatchedNumber({"rideId": $scope.rideId}, function(value, header){
      if (value.num != null)
        $scope.numOfPassenger = value.num;
    }, function(error){

    })

  });



})

.controller('timeCtrl', function($scope, $timeout){
  // var timeInSec = this.time*60;
  var targetTime = new Date(this.time);
  console.log(targetTime);
  $scope.displayTime = null;
  var timer;
  // $scope.test = "0";

  

  $scope.startTime = function(){
    console.log("Directive counting...");
    var currentTime = new Date();


    if (targetTime > currentTime){
      // console.log("Calculating difference");
      var difference = targetTime.getTime() - currentTime.getTime();
      difference = difference/1000;
      var second = Math.floor(difference % 60);
      difference = difference/60;
      var minute = Math.floor(difference % 60);
      if (second < 10){
        second = '0' + second;
      }
      $scope.displayTime = minute.toString() + ' : ' + second.toString();
      // $scope.test = $scope.test+ "0";
      // $scope.displayTime1 = minute.toString() + ' : ' + second.toString();
      console.log($scope.displayTime);

      timer = $timeout($scope.startTime, 1000)
    }
    else{
      $scope.displayTime = 0 + ' : ' + '00';
    }
      
    
  }

  $scope.$on('$destroy', function(){
    $scope.displayTime = 0 + ' : ' + '00';
    $timeout.cancel(timer);
  });

  $scope.startTime();


})

.controller('forgetCtrl', function($scope, Member, $ionicPopup, $ionicHistory, loadingService, $ionicLoading){

  $scope.sendForget = function(email){
    console.log(email);
    loadingService.start($ionicLoading);
    Member.resetPw({'email': email}, function(value, responseheader){
      console.log(value);
      loadingService.end($ionicLoading);
      var alertPopup = $ionicPopup.alert({
        title: 'Done',
        template: 'Please check your email account.'
      });
      alertPopup.then(function(res) {
        $ionicHistory.goBack();
      });

    }, function(error){
      loadingService.end($ionicLoading);
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
      // pushRegister.unregister();
      $localstorage.setObject('userInfo', null);
      $localstorage.set('genderPreference', null);
      $localstorage.set('leavePreference', null);
      $localstorage.set('goPreference', null);
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

  $scope.ridesharing = function(){
    $state.go("tab.culture");
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


.controller('goustCtrl', function($scope, $ionicPopup, Ride, licencesManager, $state, $localstorage,RideRequestService, commonCallback, safeChecking, QueueSeatProvider, RIDE_CONFIG, errorBox, loadingService, $ionicLoading){
  $scope.ready = function(destination){
    console.log("Safe? " + safeChecking.safeToStart());
    if (!safeChecking.safeToStart()){
      var warningPopup = $ionicPopup.alert({
         title: 'Error',
         template: 'You can only initiate one offer.'
       });
      warningPopup.then(function(res){

      }, function(error){

      });
      return;
    }
   //  var confirmPopup = $ionicPopup.confirm({
   //   title: 'Confirm',
   //   template: 'Are you sure you are heading to HKUST through '+ destination +'?'
   // });

    console.log('You are sure');
    // if (destination == 'Hang Hau'){
      // $scope.pickUpPt = $scope.pickUpPts[0];
    // }
    // else
      // $scope.pickUpPt = $scope.pickUpPts[1];
    
    var targetTime = new Date();
    console.log(targetTime);
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
      "gender_preference": ($scope.genderPreferred === "true"),
      "leaveUst": false
    };

    loadingService.start($ionicLoading);
    RideRequestService.addRide(info)
    .then(function(value){
        console.log(value);
        console.log(value.status.matchicon);
        safeChecking.start(1);
        $scope.targetTime = new Date();
        $scope.targetTime.setMinutes(parseInt($scope.targetTime.getMinutes())+ parseInt($scope.time));
        var cancelTime = new Date();
        cancelTime.setMinutes(parseInt(cancelTime.getMinutes())+1);

        var userinfo = $localstorage.getObject('userInfo');
        $localstorage.setObject('goPreference', {"owner": userinfo.email, "licence": $scope.licence, "time": $scope.time, "seat_number": $scope.numOfPassenger});
        $localstorage.setObject('matchInfo', {"owner": userinfo.email, "licence":$scope.licence,"endTime":$scope.targetTime,'location': destination, 'destination': "HKUST", 'matchicon': value.status.matchicon, 'cancelTime': cancelTime, 'rideId': value.status.rideId});
        $state.go('tab.gohkust_ready',{"licence":$scope.licence,"endTime":$scope.targetTime,'location': destination, 'destination': "HKUST", 'matchicon': value.status.matchicon, 'cancelTime': cancelTime, 'rideId': value.status.rideId});

   }).catch(function(error){
    errorBox.start();
    console.log(error);
   }).finally(function(){
    loadingService.end($ionicLoading);
   });



  }

  $scope.licenceIndex = 0;

  $scope.licences = licencesManager.getLicence();
  $scope.licence = $scope.licences[$scope.licenceIndex];

  $scope.time = RIDE_CONFIG.DEFAULT_TIME;
  $scope.modifyTime = function(value){
    if (($scope.time + value >= RIDE_CONFIG.MIN_TIME) &&($scope.time + value <= RIDE_CONFIG.MAX_TIME))
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

  $scope.$on("$ionicView.enter", function(scopes, states){
    QueueSeatProvider.clear();
    QueueSeatProvider.update(true, null);
    $scope.licences = licencesManager.getLicence();
    $scope.doRefresh();
    // RideRequestService.getQueueSeatNumber(false).then(function(value){
    //   $scope.statistics = value.num;
    // });
    safeChecking.end(1);
    var preference = $localstorage.getObject('goPreference');
    var userinfo = $localstorage.getObject('userInfo');
    if (!(userinfo == null || JSON.stringify(userinfo) == "{}")){

      if (!(preference == null || JSON.stringify(preference) == "{}" || userinfo.email != preference.owner)){
        $scope.time = preference.time;
        $scope.numOfPassenger = preference.seat_number;
        if ($scope.licences.indexOf(preference.licence) >= 0)
        {
          $scope.licenceIndex = $scope.licences.indexOf(preference.licence);
          $scope.licence = $scope.licences[$scope.licenceIndex];
        }
      }
    }

    if ($scope.licences.indexOf($scope.licence) < 0){
      $scope.licence = $scope.licences[0];
    }
  });

  $scope.doRefresh = function(){
    QueueSeatProvider.clear();
    QueueSeatProvider.update(false, null);
    $scope.$broadcast('scroll.refreshComplete', {"leaveUst": false});
    $scope.$apply();
  }




})


.controller("modifyLicenceCtrl", function($scope, $ionicModal, licencesManager, Member, errorBox){
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
      console.log("Create");
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
    // console.log($scope.carInfo.length);
    if ($scope.carInfo.length ==1){
      return false;
    }
    else
      return true;
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
    console.log("Changin vehicle",  tobeSent, flag);
    Member.updateVehicle({ "flag": flag, "car": tobeSent },function(value, responseheader){
      console.log(value);
      if (value.status =="fail"){
        
        return false;
      }
      else{
        if (!$scope.deleting)
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
      errorBox.start();

    });
  }

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

  $scope.deleteCtrl = function(index){
    // console.log(index);
    if (!$scope.verifyDeleteEmpty()) 
      return;
    console.log(index);
    $scope.copyToPending(); 
    $scope.carInfo.splice(index, 1); 
    $scope.deleteStatus(index); 
    $scope.updatelist();
  }

})


.controller("tabController", function($scope){
  $scope.disableSelected = [true, false, false];
  $scope.select = function(dest){
    // console.log(dest, $scope.disableSelected[dest]);
    if (dest === 0 && !$scope.disableSelected[dest]){
      // console.log("0 is selected");
      $scope.disableSelected = [true, false, false];
    }
    else if (dest === 1 && !$scope.disableSelected[dest]){
      // console.log("1 is selected");
      $scope.disableSelected = [false, true, false];
    }
    else if (dest === 2 && !$scope.disableSelected[dest]){
      // console.log("2 is selected");
      $scope.disableSelected = [false, false, true];
    }
  }
});
