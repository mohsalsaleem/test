//var Details = {}
  //  Details = UserDetails.findOne({Email:Meteor.user().emails[0].address})
Template.view.helpers({
    'info':function(){
        return UserDetails.findOne({});
    },
    uploads:function(){
        return Uploads.find();
    }

});
