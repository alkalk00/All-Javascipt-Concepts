
            //It has the property of array i.e. length
            //It is not an array but it act like an array

            function func(n1,n2){
                //can be rewrite by declaring the new value in it
                arguments[0]="Souvik Acharya is";
                console.log(arguments[0]);
                console.log(arguments[1]);

                //argument property i.e. lenght that will show
                console.log(arguments.length+"\n");
                //argument.length will show the no. of argument not the parameter in function

                // in for loop 
                for(var i=0;i<arguments.length;i++){
                    console.log(arguments[i]+" ");
                }

                //calle property
                //shows the full function
                //for more lines the code is commented
                // document.write(arguments.callee)
            }
            func('deep is ',' Bad\n');

            //Too many argument object
            //if there is more argument and if the parameter are not same as compare to arguments
            //then by argument.lenght property will display the arguments will its lenght told in function

            function func1(a1,a2){
                console.log("a1: "+a1+" a2: "+a2+"\n");
                console.log("a3: "+arguments[2]+" a4: "+arguments[3]);
            }
            func1(10,20,30,40)
