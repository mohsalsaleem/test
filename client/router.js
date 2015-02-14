Router.map( function () {

Router.route('/',function()
             {    
                this.render('index', 
                {
                    onBeforeAction: function()
                    {
                        if(!Meteor.user())
                        {
                            if(Meteor.logginIn())
                            {
                            }
                            else Router.go('index');
                        }

                    }

                    });
    
                });
    
    
Router.route('/create',function() 
        {
            this.render('create');
        });    
    

Router.route('/view',function()
        {
            this.render('view');
        });



});


