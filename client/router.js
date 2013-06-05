// ROUTER
  Meteor.Router.add({
    '/'               : 'home',
  '/login'            : 'login',
  '/loginacc'         : 'loginacc',
  '/register'         : 'register',
  '/singleplayer'     : 'singleplayer',
  '/multiplayer'      : 'multiplayer',
  '/memory'           : 'memory',
  '/gamememory'       : 'gamememory',
  '/intromemory'      : 'intromemory',
  '/introendmemory'   : 'introendmemory',
  '/viewscorememory'  : 'viewscorememory',
  '/puzzel'           : 'puzzel',
  '/gamepuzzel'       : 'gamepuzzel',
  '/intropuzzel'      : 'intropuzzel',
  '/introendpuzzel'   : 'introendpuzzel',
  '/viewscorepuzzel'  : 'viewscorepuzzel',
  '/trivia'           : 'trivia',
  '/highscore'        : 'highscore',
  '/highscoreusers'   : 'highscoreusers',
  '/highscorememory'  : 'highscorememory',
  '/viewscoretrivia'  : 'viewscoretrivia',
  '/wordsearch'       : 'wordsearch',
  '/highscores'       : 'highscores'
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