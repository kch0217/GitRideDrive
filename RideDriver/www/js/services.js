angular.module('starter.services', [])

.factory('loadingService', function() {
  return {
    start: function($ionicLoading){
      $ionicLoading.show({
      template: 'Loading...'
    });
    },
    end: function($ionicLoading){
      $ionicLoading.hide();
    }
  }
})

.service('userRegister', function(LoopBackAuth){
    //user
  this.register = function(){
    // kick off the platform web client
    Ionic.io();

    // this will give you a fresh user or the previously saved 'current user'
    var user = Ionic.User.current();

    // if the user doesn't have an id, you'll need to give it one.
    // if (!user.id) {
      // user.id = Ionic.User.anonymousId();

      user.id = ''+ LoopBackAuth.currentUserId;
    // }

    user.set('accessTokenId', LoopBackAuth.accessTokenId);

    //persist the user
    user.save();
  }


})

.service('pushRegister', function(Member){
  //push
  this.token = null;
  var user = Ionic.User.current();

  var push = new Ionic.Push({
    "debug": false,
    'onNotification': function(notification) {
      // var payload = notification.payload;
      console.log(notification);
    },
    "onRegister": function(data) {
      console.log(data.token);
    }
  });

  var callback = function(pushToken) {
    console.log(pushToken.token);
    this.token = pushToken.token;
    console.log(this.token);
    user.addPushToken(pushToken);
    user.save(); // you NEED to call a save after you add the token

    Member.updateToken({'deviceToken': this.token}, function(value, responseheaders){
        console.log(value);
      }, function(error){

      });
  }


  this.register = function(){


    push.register(callback);
  };

  this.unregister = function(){
    push.unregister();
  }

})

  .service('licencesManager', function(Own ){
//include other cars' data
    var car = [];
    

    this.getLicenceFromServer = function(callback){
      Own.getVehicle(function(value, responseheaders){
      car = value.vehicle;
      // console.log(value);
      if (callback != null)
        callback();
    }, function(error){
      // console.log(error);

    });
    }

    this.getLicence = function(){
      var licence = []
      for (var i = 0; i< car.length; i++){
        licence.push(car[i].license_number);
      }
      // console.log(car);
      return licence;
    }

    this.getAll = function(){
      return car;
    }

    this.modifyCarList = function(carInfo){
      car = carInfo;
    }

  })

.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }
}])



.factory('commonCallback', function($q){
  return {
    defaultHandling: function(promise){

      var deferred = $q.defer();
      promise.then(function(value, responseHeaders){
        deferred.resolve(value);
      }, function(error){
        deferred.reject(error);
      });

      return deferred.promise;
    }, 

    emptyErrorHandling: function(){
      var deferred = $q.defer();
      deferred.reject('early exit!');
      return deferred.promise;
    },

    success: function(value, responseHeaders){
      var deferred = $q.defer();
      deferred.resolve(value);
      return deferred.promise;
    },
    error: function(error){
      var deferred = $q.defer();
      deferred.resolve(error);
      return deferred.promise;
    }
  }

})

.factory('LoginService', function(Member, commonCallback){




  return {
    login: function(info){

      var promise = Member.login({"email": info.email, "password": info.password}).$promise;

      return commonCallback.defaultHandling(promise);
    },

    getGenderPreference: function(){

      var promise = Member.getGenderPreference().$promise;



      return commonCallback.defaultHandling(promise);
    },

    validation: function(datasent){
      var promise = Member.validationandregister(datasent).$promise;

      return commonCallback.defaultHandling(promise);
    },

    register: function(datasent){
      var promise = Member.register(datasent).$promise;

      return commonCallback.defaultHandling(promise);
    }

  }

})

.factory('RideRequestService', function(Ride, Request, commonCallback){
  return{
    addRide: function(info){
      var promise = Ride.addRide(info).$promise;

      return commonCallback.defaultHandling(promise);
    },

    getQueueSeatNumber: function(leaveOption){
      // console.log(leaveOption);
      var promise = Request.getQueueSeatNumber({"leaveUst": leaveOption}).$promise;
      return commonCallback.defaultHandling(promise);
    }
  }
})

.service('safeChecking', function(){
  var pageControl = [true, true];

  this.safeToStart = function(page){
    if (pageControl[0] && pageControl[1])
      return true;
    else
      return false;
  }

  this.start = function(page){
    pageControl[page] = false;
  }

  this.end = function(page){
    pageControl[page] = true;
  }

})

.service('QueueSeatProvider', function(RideRequestService){
  var queueSeat = {'home': null, 'hkust': null};

  this.update = function(leaveUst, callback){
    if (queueSeat.home == null || queueSeat.hkust == null){
      RideRequestService.getQueueSeatNumber(true).then(function(value){
        console.log("QueueSeatProvider Leave UST", value);
        queueSeat['home'] = value.num;
        return RideRequestService.getQueueSeatNumber(false);
      }).then(function(value){
        console.log("QueueSeatProvider Go UST", value);
        queueSeat['hkust'] = value.num;
      }).catch(function(error){
        console.log(error);
      }).finally(function(){
        if (callback !== null){
          // console.log(queueSeat);
          // console.log(leaveUst);
          if (leaveUst =="true"){
            // console.log("QueueSeatProvider return home", callback);
            callback(queueSeat['home']);
          }
          else{
            console.log("QueueSeatProvider going hkust", callback);
            callback(queueSeat['hkust']);
          }
            
        }
      });
    }else
    {
      if (callback !== null){
        // console.log("QueueSeatProvider no update callback", leaveUst, callback);
        if (leaveUst == "true"){
          // console.log("QueueSeatProvider no update callback 2", queueSeat['home']);
          callback(queueSeat['home']);
        }
        else{
          // console.log("QueueSeatProvider no update callback 3", queueSeat['hkust']);
          callback(queueSeat['hkust']);
        }
          

      }

    }
  }

  this.clear = function(){
    queueSeat = {'home': null, 'hkust': null};
  }

  // this.get = function(value){
  //   if (queueSeat.home == null){
  //     console.log(queueSeat);
  //     console.log("updating count!")
  //     this.update(null);
  //   }

  //   if (value)
  //     return queueSeat['home'];
  //   else
  //     return queueSeat['hkust'];
  // }


})

// .service('connectDevice', function($cordovaPush, $cordovaToast){

//   this.register = function(){
//     console.log(ionic);
//     if (ionic.Platform.isAndroid()) {
//         config = {
//             "senderID": "721443256606" // REPLACE THIS WITH YOURS FROM GCM CONSOLE - also in the project URL like: https://console.developers.google.com/project/434205989073
//         };
//     }
//     else if (ionic.Platform.isIOS()) {
//       config = {
//         "badge": "true",
//         "sound": "true",
//         "alert": "true"
//       }
//     }
//     console.log($cordovaPush);
//     $cordovaPush.register(config).then(function (result) {
//       console.log("Register success " + result);

//       $cordovaToast.showShortCenter('Registered for push notifications');
//       $scope.registerDisabled=true;
//       // ** NOTE: Android regid result comes back in the pushNotificationReceived, only iOS returned here
//       if (ionic.Platform.isIOS()) {
//         $scope.regId = result;
//         storeDeviceToken("ios");
//       }
//     }, function (err) {
//       console.log("Register error " + err)
//     });
//   }
// })

.service("pushIDManager", function($ionicPlatform, Member, $rootScope){
  var gcmID;
  var push;
  var manager = this;

  this.init = function(){
    return;
    $ionicPlatform.ready(function(){
      push = PushNotification.init({
        android:{
          senderID: "721443256606"
        },
        ios: {
          
          "badge": "true",
          "sound": "true",
          "alert": "true"
        
        },
        windows: {}
      });

      push.on('registration', function(data){
        console.log("receive data", data);
        manager.registerGCM(data.registrationId);
        Member.updateToken({'deviceToken': data.registrationId}, function(value, responseheaders){
          console.log(value);
        }, function(error){
          console.log(error);
        });

      });

      push.on('notification', function(data) {
        // console.log(data.message);
        // console.log(data.title);
        // console.log(data.count);
        // console.log(data.sound);
        // console.log(data.image);
        console.log("Received push", data.additionalData);


      });

      push.on('error', function(e) {
        console.log(e.message);
      });


    });
    
  }

  this.registerGCM = function(id){
    gcmID = id;
  }


});

 
