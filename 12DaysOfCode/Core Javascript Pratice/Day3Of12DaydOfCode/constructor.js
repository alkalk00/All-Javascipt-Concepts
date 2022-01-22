
        //2. Object Constructor
        //it creates an empty refference of the object throught constructor we can create object
        //but it is mostly preffered to use object literal rather then oject constructor
        //in object literal use the dot operator over square brakets
        //proper defination2
        //instance object are created with constructor, which are basically special function that prepare the
        //new instance of an object for use
        var obj = new Object();
        //the new Object create a reffernce of object in obj
        obj.key = "deep ";
        obj.key1 = "is ";
        obj.key2 = "a developer";
        obj.key3 = (i,j)=>{
            return i+j;
        };

        console.log(obj.key,obj.key1,obj.key2+" "+obj.key3(22,33));
        //constructor 2
        //a fucntion with this keyword in it states the instacne object which is created i.e. new_obj
        //declar a function and create keys in it with this keyword and then create a new instance variable
        //with assigning it to fucntion name and new keyword i.e. var new_obj = new constructor();
        //call the values with instace object with dot operator and key name i.e. new_obj.key_1;
        function Constructor(){
            //thisgit points the instance object which is created
            this.key_1 = " hello",
            this.key_2 = ()=>{
                console.log(this.key_1+" world");
            }
        }

        //new object is created
        var new_obj = new Constructor();
        new_obj.key_2();
        //new instance object is again created
        var new_obj2 = new Constructor();
        console.log(new_obj2.key_1);

        //3. Constructor
        function Constructor2(parameter){
            this.key__1 = parameter,
            this.key__2 = (parameter2)=>{
                return parameter+parameter2;
            };
        };
        var new_obj3 = new Constructor2(88);
        console.log(""+new_obj3.key__2(99));

        //chekcking the property avaliable or not
        //1. typeof
        if(typeof new_obj2.key_1 != 'undefinded'){
            console.log("Avaliable");
        }else{
            console.log("not avaliable");
        }
        //2. 'key' in new_object
        if('key_4' in new_obj2){
            console.log("avaliable");
        }else{
            console.log("not avlaliable");
        }
        //3. hasOnProperty
   