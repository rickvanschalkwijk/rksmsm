// ROUTER
  Meteor.Router.add({
    '/'           : routeTo('home'),
  '/login'        : 'login',
  '/loginacc'     : 'loginacc',
  '/register'     : 'register',
  '/singleplayer' : 'singleplayer',
  '/multiplayer'  : routeTo('multiplayer'),
  '/memory'       : 'memory',
  '/puzzel'       : 'puzzel'
  });

  function routeTo(routing){
    return function(){
      if(Session.get('logged_in')){
        return routing;
      }else{
        return 'login';
      }
    }
  }