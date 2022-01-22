
    //Difference between rest parameter and argument object: 
    /*    * Rest parameters only the ones that haven't been given a seperate name,
           while the argument object contains all arguments passed to the functions<br>
          * The argument object is not a real array, while rest parameter are array instance,
            meaning like sort, map, forEach or pop can be applied on it directly<br>
          * argument object has addition functionality specif to itself(calle , lenght)
    */
        //rest parameter
        function func(a,...args){
            console.log(a,args);
        }
        func(10,20,30,40,50,60);
        //it hold all the arguments seperately by a =10 and args=20,30,40,50,60
        //so the lenght of it is less then the values in parameter declared
        //lenght = total no. of parameter -no. of parameter declared

        //argument object
        function func1(a){
            console.log(a,arguments);
        }
        func1(10,20,30,40,50,60);
        //it hold all the arguments but displays only the a parameter
        //lenght of it tell all the parameters declared in the function
        //it hold all the parameters but display only the parameter that is declared
    