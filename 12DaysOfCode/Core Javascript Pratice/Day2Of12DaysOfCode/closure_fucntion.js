
        //clousre are the same as nested function which means a outer function variable or data
        //is called in inner function.
        //but a inner function can't able to access the data of outer function.
        //the scope of outer function can access the inner function and the global function
        var x = 22;
        function show(){
            var k = 24;
            console.log(k);
            console.log(x);
        }

        //throught function
        function func(){
            var o = 'Outer function';
            function func_inn(){
                var oo = 'Inner function';
                console.log(oo);
                //outer function is accessed
                console.log(o);
            }
            func_inn();
            //inner function can't be accessed by outer function
            // console.log(oo);
            //outer function is accessed
            console.log(o);
        }
        func();
    