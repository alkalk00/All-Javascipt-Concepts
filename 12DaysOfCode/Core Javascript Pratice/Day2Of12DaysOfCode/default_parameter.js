
        //default parameters are thoese whose values are declare when the parameter are declared
        //if the arguments tires to assign the new value to the parameter then 
        //the value of parameter will get overwride and it will show the value of argument only
        //for the case of array we can also assign new value to array but
        //it should be in the form of [] brakets on line 30
        function func(a,b,c=22){
            console.log("a: "+a+" b: "+b+" c: "+c);
        }
        func(22,34);

        function func1(num,a=['Souvik',10]){
            console.log("a: "+a[1]+" num: "+num);
        }
        //we have to use [] to assigne new value to the array
        //the parameter of array are overwirde when the argument gives it own value
        func1(20,['','DEEP']);