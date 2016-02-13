Template.menu.helpers({
  isadmin : function(){
    var user = Meteor.user();
    if (user) {
      if (user.username === 'admin') {
        return true;
      }else{
        return false
      }
    }else{
      return false
    }
  },
  isbenevole: function() {
    var user = Meteor.user();
    if (user) {
      var mail = user.emails[0].address;
      var b = Benevoles.findOne({mail: mail});
      if (b) {
        return true
      } else{
        return false
      }
    }
  }
});


