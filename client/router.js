// ROUTER
  Meteor.Router.add({
    '/'           : routeTo('home'),
  '/login'        : 'login',
  '/loginacc'     : 'loginacc',
  '/register'     : 'register',
  '/singleplayer' : routeTo('singleplayer'),
  '/multiplayer'  : routeTo('multiplayer'),
  '/memory'       : routeTo('memory'),
  '/puzzel'       : routeTo('puzzel')
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