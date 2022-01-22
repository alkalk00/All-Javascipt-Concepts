
        //rest parameter is an array so we can also access throught it's index number i.e. rest[0],rest[1]
        //rest parameter should always written at the last of the parameters i.e. will show error the in console
        //in developer tool
        //the ... is called rest operator and it also called spread operator
        //rest parameter is a parameter which access the rest of the arguments which are declared
        //the parameter which are declared will when they are declared in function 
        //rest parameter which does't have parameter that can be accessed by rest parameter
        function func(a,b,...rest){
            console.log(a+": "+rest);
        }
        func(10,30,40,50,60,70);
    