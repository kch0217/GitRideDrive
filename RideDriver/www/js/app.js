// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.service.core', 'starter.controllers', 'starter.services','starter.directives', 'ngResource', 'lbServices'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('signIn',{
      url: '/signin',
      templateUrl: 'templates/signin.html',
      controller: 'signCtrl'
  })

  .state('register',{
    url: '/register',
    templateUrl: 'templates/register.html',
    controller: 'registerCtrl'
  })

  .state('forgetPW', {
    url: '/forgetPW',
    templateUrl: 'templates/forgetPW.html',
    controller: 'forgetCtrl'
  })

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.gohome', {
    url: '/gohome',
    views: {
      'tab-gohome': {
        templateUrl: 'templates/driver-leave.html',
        controller: 'goHomeCtrl'
      }
    }
  })

  .state('tab.gohome_ready', {
    url: '/gohome/ready/:licence/:minute/:location/:destination/:matchicon',
    views: {
      'tab-gohome': {
        templateUrl: 'templates/driver-leave2.html',
        controller: 'goHomeMatchCtrl',
        params: ['licence','minute','location','destination', 'matchicon']
      }
    }
  })

  .state('tab.gohome_chat', {
    url: '/gohome/ready/:id',
    views: {
      'tab-gohome': {
        templateUrl: 'templates/driver-chatroom.html',
        controller: 'chatCtrl',
        params: ['id']
      }
    }
  })


  .state('tab.gohkust', {
      url: '/gohkust',
      views: {
        'tab-gohkust': {
          templateUrl: 'templates/driver-toust.html',
          controller: 'goustCtrl'
        }
      }
    })
    .state('tab.ready', {
      url: '/ready',
      views: {
        'tab-ready': {
          templateUrl: 'templates/driver-ready.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.setting', {
    url: '/setting',
    views: {
      'tab-setting': {
        templateUrl: 'templates/driver-setting.html',
        controller: 'SettingCtrl'
      }
    }
  })

    .state('tab.setting_change_PW',{
    url: '/changePW',
    views: {
      'tab-setting':{
        templateUrl: 'templates/changePassword.html',
        controller: 'changePWCtrl'
      }
    }

  })

  .state('tab.setting_change_car',{
    url: '/changeCar',
    views: {
      'tab-setting': {
        templateUrl: 'templates/changeLicence.html',
        controller: 'modifyLicenceCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/signin');

})

.config(function(LoopBackResourceProvider){
  // Change the URL where to access the LoopBack REST API server
    LoopBackResourceProvider.setUrlBase('http://ridesharingfyp.ddns.net:3000/api');
    // LoopBackResourceProvider.setUrlBase('http://147.8.202.247:3000/api');

})



.config(function($httpProvider) {
  $httpProvider.interceptors.push(function($rootScope) {
    return {
      request: function(config) {
        $rootScope.$broadcast('loading:show')
        return config
      },
      response: function(response) {
        $rootScope.$broadcast('loading:hide')
        return response
      }
    }
  })
})


.run(function($rootScope, $ionicLoading) {
  $rootScope.$on('loading:show', function() {
    $ionicLoading.show({template: 'Loading...'})
  })

  $rootScope.$on('loading:hide', function() {
    $ionicLoading.hide()
  })
});
