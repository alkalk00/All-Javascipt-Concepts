
        //class through construcor 
        //in javascript there is no such thing call class but in es6 it was introduced
        //we will look on the custom class through constructor i.e.

        var Constructor = function(a){
            this.key1 = a;
            //private data in class
            var private = ' Private ';
            //we can acces it though return it into a methord
            //return the private value
            this.key4 = ()=>{
                return private;
            }
            this.key2 = ()=>{
                console.log("Custom Constructor OP: "+this.key1+" ");
            };
        };
        var instace_obj = new Constructor(1);
        instace_obj.key2();
        console.log(instace_obj.private)
        console.log(instace_obj.key4())

   