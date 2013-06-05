// ROUTER
  Meteor.Router.add({
    '/'                   : routeTo('home'),
  '/login'                : 'login',
  '/loginacc'             : 'loginacc',
  '/register'             : 'register',
  '/singleplayer'         : routeTo('singleplayer'),
  '/multiplayer'          : routeTo('multiplayer'),
  '/memory'               : routeTo('memory'),
  '/gamememory'           : routeTo('gamememory'),
  '/intromemory'          : routeTo('intromemory'),
  '/introendmemory'       : routeTo('introendmemory'),
  '/viewscorememory'      : routeTo('viewscorememory'),
  '/puzzel'               : routeTo('puzzel'),
  '/gamepuzzel'           : routeTo('gamepuzzel'),
  '/intropuzzel'          : routeTo('intropuzzel'),
  '/introendpuzzel'       : routeTo('introendpuzzel'),
  '/viewscorepuzzel'      : routeTo('viewscorepuzzel'),
  '/trivia'               : routeTo('trivia'),
  '/highscore'            : routeTo('highscore'),
  '/highscoreusers'       : routeTo('highscoreusers'),
  '/highscorememory'      : routeTo('highscorememory'),
  '/viewscoretrivia'      : routeTo('viewscoretrivia'),
  '/wordsearch'           : routeTo('wordsearch'),
  '/highscores'           : routeTo('highscores'),
  '/memory_level2'        : routeTo('memory_level2'),
  '/viewscorememorylevel2': routeTo('viewscorememorylevel2'),
  '/puzzel_level2'        : routeTo('puzzel_level2'),
  '/viewscorepuzzellevel2': routeTo('viewscorepuzzellevel2')
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