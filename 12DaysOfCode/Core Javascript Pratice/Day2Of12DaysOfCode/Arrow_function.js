
        //Arrow function are always anomynous function
        //also incorrectly called fat-arrow function
        //shorter version of anomynous function
        var x = (parameter,...args)=>{console.log(parameter+"arrow fucntion "+args+"\n");
            var xx = function(a){
                console.log(a+'Anomynous Fucntion');
            }
            xx('argument in ')};
        x('argument in ',20,30,40,50,60);

        //most shorest version
        var fucnc = c => {return c; };
        //or
        var fucn = c => c;
        //if we put => {c} it will not work
        //to work we can write {return c;};
        console.log(fucn("\n"+20));
        