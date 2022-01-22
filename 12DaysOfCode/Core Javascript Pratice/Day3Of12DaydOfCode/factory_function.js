
        //when a fucntion return an object we call it factory function. It can produce oject instance without
        //new keyword or classes i.e.

        //declar a function and write keys in return statements and declar a variable then assign the
        //fucntion to the variable and call it by the variable name and key with it i.e. varibale.key();
        //this is not a class it is function and by this we can create objects
        function factory_fun(a){
            return{
                key1: 22,
                key2: 24,
                key3: a,
                key4: (b)=>{
                    return a+b;
                }
            };
        };
        var variable = factory_fun("parameter ");
        console.log(variable.key1+" "+variable.key3+" "+variable.key4(33)+" ");
        //another object is declared and the fucntion is assigned
        var variable2 = factory_fun("parameter2");
        console.log(variable2.key3);
    