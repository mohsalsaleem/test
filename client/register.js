Template.register.events({
    'submit form': function (event,template) {
        event.preventDefault();
        var emailVar = template.find('#register-email').value;
        var passwordVar = template.find('#register-password').value;
        console.log('Form Submitted');
        Accounts.createUser({
            email:emailVar,
            password:passwordVar
        });
    }
});