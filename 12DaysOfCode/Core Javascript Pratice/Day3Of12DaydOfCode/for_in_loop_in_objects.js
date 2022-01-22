
        //for in loop checks the no. of properties in objects like key and values
        //we can visit all the values
        //instance members are thoughs which are declar inside the constructor
        //for in loop can access both the instance and prototype members in the constructor and objects

        function Constructor(){
            this.key1 = 10,
            this.key2 = 20,
            this.key3 = ()=>{
                console.log(this.key1+" "+this.key2);
            }
        };
        var new_obj = new Constructor();
        var new_obj2 = new Constructor();
        new_obj.key3();

        //to check all the properties we can use for in loop
        //it will go through all the properties in the constructor and print all the values
        for(var cheking_properties in new_obj){
            //to not write function
            if(typeof new_obj[cheking_properties] !== 'function'){
                //displays the properties not methords
                //to see the keys we can write the variable which can be declared
                console.log(cheking_properties+" "+new_obj[cheking_properties]+"<br>");
            }
        }

        //to see the keys 
        //this is instance members
        console.log(Object.keys(new_obj));
  