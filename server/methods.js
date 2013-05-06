console.log('Methods init');

Meteor.methods({
//   getTotalUsers: function () {
//     // .. do other stuff ..
//     console.log("getTotalUsers methods");

//     var TotalUsers = Meteor.users.find().count();
//     console.log(TotalUsers);

//     return TotalUsers;
//   }
  setActive: function(userId, bool){
    console.log('setActive method');
    console.log(userId);

    if(!bool){
      Meteor.users.update({ 
        _id:userId 
      },{ 
        $set: {
          'profile.active': false
        }
      },{
        multi: false
      });
      return 'logging out';
    }else{
      var timestamp = ( new Date() ).getTime();

      Meteor.users.update({ 
        _id:userId 
      },{ 
        $set: {
          'profile.active': true,
          'profile.last_activity': timestamp
        }
      },{
        multi: false
      });
      return 'logging in';

    }
  }
});