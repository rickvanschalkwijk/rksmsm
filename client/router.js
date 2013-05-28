// ROUTER
  Meteor.Router.add({
    '/'               : routeTo('singleplayer'),
  '/login'            : 'login',
  '/loginacc'         : 'loginacc',
  '/register'         : 'register',
  '/singleplayer'     : routeTo('singleplayer'),
  '/multiplayer'      : routeTo('multiplayer'),
  '/memory'           : routeTo('memory'),
  '/gamememory'       : routeTo('gamememory'),
  '/intromemory'      : routeTo('intromemory'),
  '/introendmemory'   : routeTo('introendmemory'),
  '/viewscorememory'  : routeTo('viewscorememory'),
  '/puzzel'           : routeTo('puzzel'),
  '/gamepuzzel'       : routeTo('gamepuzzel'),
  '/intropuzzel'      : routeTo('intropuzzel'),
  '/introendpuzzel'   : routeTo('introendpuzzel'),
  '/viewscorepuzzel'  : routeTo('viewscorepuzzel'),
  '/trivia'           : routeTo('trivia'),
  '/highscore'        : routeTo('highscore'),
  '/viewscoretrivia'  : routeTo('viewscoretrivia'),
  '/wordsearch'       : routeTo('wordsearch')
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