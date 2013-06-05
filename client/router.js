// ROUTER
  Meteor.Router.add({
    '/'                   : 'home',
  '/login'                : 'login',
  '/loginacc'             : 'loginacc',
  '/register'             : 'register',
  '/singleplayer'         : 'singleplayer',
  '/multiplayer'          : 'multiplayer',
  '/memory'               : 'memory',
  '/gamememory'           : 'gamememory',
  '/intromemory'          : 'intromemory',
  '/introendmemory'       : 'introendmemory',
  '/viewscorememory'      : 'viewscorememory',
  '/puzzel'               : 'puzzel',
  '/gamepuzzel'           : 'gamepuzzel',
  '/intropuzzel'          : 'intropuzzel',
  '/introendpuzzel'       : 'introendpuzzel',
  '/viewscorepuzzel'      : 'viewscorepuzzel',
  '/trivia'               : 'trivia',
  '/highscore'            : 'highscore',
  '/highscoreusers'       : 'highscoreusers',
  '/highscorememory'      : 'highscorememory',
  '/viewscoretrivia1'      : 'viewscoretrivialevel1',
  '/viewscoretrivia2'      : 'viewscoretrivialevel2',
  '/wordsearch'           : 'wordsearch',
  '/highscores'           : 'highscores',
  '/memory_level2'        : 'memory_level2',
  '/viewscorememorylevel2': 'viewscorememorylevel2',
  '/puzzel_level2'        : 'puzzel_level2',
  '/viewscorepuzzellevel2': 'viewscorepuzzellevel2',
  '/trivialevel2'         : 'trivialevel2',
  });

Meteor.Router.filters({
  'checkLoggedIn': function(page) {
    if (Meteor.loggingIn()) {
      return 'loading';
    } else if (Meteor.user()) {
      return page;
    } else {
      return 'login';
    }
  }
});

Meteor.Router.filter('checkLoggedIn', {except: ['login','loginacc','register']});
