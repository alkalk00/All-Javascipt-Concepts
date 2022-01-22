
        //Javascript does not see the datatype passed by the parameter
        //Javascript does not see how many parameters passed it only ignores and used what it has
        //Javascript does not see the type of the parameters

        function func(name,address){
            console.log("Name: "+name+" Address: "+address+"\n");
        }
        func('Souvik Acharya','Dhandanga');

        function fun(data){
            console.log("value: "+data);
        }
        fun(33);
        //Missing values are set to be undefined in javascript 
        //i.e.

        function funcone(a,b,c){
            console.log("\nA: "+b+" B: "+b+" C: "+c);
            //if one parameter is defined but not call inside the function then it said to be undefined
        }
        funcone(2,3,4);
        funcone(2,3);
    