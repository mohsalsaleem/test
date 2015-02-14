Template.login.events({
    'submit form':function(event,template){
        event.preventDefault();
        var emailVar = template.find('#login-email').value;
        var passwordVar = template.find('#login-password').value;
        console.log('Login form submitted');
        Meteor.loginWithPassword(emailVar,passwordVar);
    }
});