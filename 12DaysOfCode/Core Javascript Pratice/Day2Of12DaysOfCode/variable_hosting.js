
        var a = 10;
        console.log(a+" "+b);
        //b is undefinded due to not initilize it with a
        var b=20;
        //b is initilized and now it will shouw the value
        console.log(a+" "+b);

        /*
        javascript compile as:
        the declaration always be on the top,not the variable initilization

        var a;
        var b;
        a=10;
        document.write(a+" "+b+"<br>");
        b=20;
        document.write(a+" "+b+"<br>");

        */
        
        var i = "Hello ";
        console.log(i);
        function fucn(){
            console.log(i);
            var i= 'Souvik';
            console.log(i);
        }
        fucn();

        /*
        javascript compiles as:

        var i;
        i='hello';
        dcoument.write(i+"<br>");
        fucntion fucn(){
            var i;
            //so the variable comes on top but the initilization is below the print statement so it is undefined
            //it should be top of the print statement so it could be displayed
            dcoument.write(i);
            i='Sovuik';
        }

        */
   