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
    "debug": true,
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

  .service('licencesManager', function(Own){
    this.licence = [];

    this.getLicenceFromServer = function(callback){
      Own.getVehicle(function(value, responseheaders){
      console.log(value.vehicle);

      this.licence = value.vehicle;
      console.log(callback);
      if (callback != null)
        callback();
    }, function(error){
      console.log(error);

    });
    }

    this.getLicence = function(){
      return this.licence;
    }

  })

 
;
