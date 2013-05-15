// ROUTER
  Meteor.Router.add({
    '/' : function() {
      if (Session.get('logged_in')) {
        return 'home';
      } else {
        return 'login';
      }
    },
  '/login'        : 'login',
  '/loginacc'     : 'loginacc',
  '/register'     : 'register',
  '/singleplayer' : 'singleplayer',
  '/multiplayer'  : 'multiplayer',
  '/memory'       : 'memory'
  });