Template.index.helpers({
    'emailAddress':function(){
        return Meteor.user().emails[0].address;
    }
})


Template.index.events({
    'click .logout': function(event) {
        event.preventDefault();
        Meteor.logout();

    }
});