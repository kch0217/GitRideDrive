angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Nicole',
    text: 'You\'re on your way?',
    date: '',
    icon: 'http://www.business-software.com/wp-content/uploads/2013/02/avatar_placeholder.png'
  }, {
    id: 1,
    name: 'Ken',
    text: 'OK!',
    date: '',
    icon: 'http://www.business-software.com/wp-content/uploads/2013/02/avatar_placeholder.png'
  }, {
    id: 2,
    name: 'Ken',
    text: 'OK',
    date: '',
    icon: 'http://www.business-software.com/wp-content/uploads/2013/02/avatar_placeholder.png'
  }, {
    id: 3,
    name: 'Sam',
    text: 'Wait',
    date: '',
    icon: 'http://www.business-software.com/wp-content/uploads/2013/02/avatar_placeholder.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
