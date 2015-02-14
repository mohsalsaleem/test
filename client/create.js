Template.create.events({
    'submit form': function(event,template) {
        event.preventDefault();
        var userName = template.find('#userName').value;
        var userCollege = template.find('#userCollege').value;
        var userHobbies = template.find('#userHobbies').value.split(',');
        var userPassion = template.find('#userPassion').value;
        var userFb = template.find('#userFb').value;
        var userTwitter = template.find('#userTwitter').vaue;
        console.log(userName+'\n'+userCollege);
        console.log(userPassion);
        for(var i = 0; i< userHobbies.length; i++)
        {
            console.log(userHobbies[i]);
        }
        console.log(Meteor.user().emails[0].address);

        var Status = UserDetails.insert({
            Name: userName,
            College: userCollege,
            Hobbies: userHobbies,
            Passion: userPassion,
            FbLink: userFb,
            TwitterLink: userTwitter,
            Email: Meteor.user().emails[0].address,
            createdAt: new Date()
        });
        Router.go('/view')

    }
    
});
