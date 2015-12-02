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

.controller('signCtrl', function($scope, $state){
  $scope.signIn = function(){
    console.log('click login');



    $state.go('tab.gohome', {}, {reload:true});
  }

})

.controller('goHomeCtrl',function($scope, $state, $ionicHistory){
  $scope.ready = function(destination){

    if (destination == 'Hang Hau'){
      $scope.pickUpPt = $scope.pickUpPts[0];
    }
    else
      $scope.pickUpPt = $scope.pickUpPts[1];
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
  $scope.licences = ["AX123", "BX546", "WT369", "GG789"];
  $scope.licenceIndex = 0;
  $scope.licence = $scope.licences[$scope.licenceIndex];
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

.controller('chatCtrl', function($scope, $stateParams, Chats){
  $scope.id = $stateParams.id;

  $scope.chats = Chats.all();

  $scope.submitChat = function(){
    if ($scope.currentmsg =="" || $scope.currentmsg == null){
      return;
    }
    console.log($scope.currentmsg);
    var msgPackage = {'id': $scope.chats[$scope.chats.length-1].id +1,
                        'name': 'Mary', 'text': $scope.currentmsg, 'date': new Date().toLocaleString(),
                        'icon': 'http://www.business-software.com/wp-content/uploads/2013/02/avatar_placeholder.png'};
    $scope.chats.push(msgPackage);
    $scope.currentmsg = "";
  }



})


.controller('SettingCtrl', function($scope, $ionicHistory, $state){
  $scope.logout = function(){
    $ionicHistory.clearCache();
    $state.go('signIn');
  }
});
