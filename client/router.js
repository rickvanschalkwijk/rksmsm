// ROUTER
  Meteor.Router.add({
    '/'               : routeTo('home'),
  '/login'            : 'login',
  '/loginacc'         : 'loginacc',
  '/register'         : 'register',
  '/singleplayer'     : routeTo('singleplayer'),
  '/multiplayer'      : routeTo('multiplayer'),
  '/memory'           : routeTo('memory'),
  '/gamememory'       : routeTo('gamememory'),
  '/intromemory'      : routeTo('intromemory'),
  '/introendmemory'   : routeTo('introendmemory'),
  '/viewscorememory'   : routeTo('viewscorememory'),
  '/puzzel'           : routeTo('puzzel'),
  '/trivia'           : routeTo('trivia'),
  '/highscore'           : routeTo('highscore')
  });

  function routeTo(routing){
    return function(){
      
      if(Meteor.userId() != null){
        return ''+routing+'';
      }else{
        return 'login';
      }
    }
  }