
        //object literal
        //object literal through declaration
        var obj = {};
        obj.key1 = "key1";
        obj.key2 = ()=>{
            console.log("methord in object");
        };
        console.log(obj.key1+" ");
        obj.key2();

        //object literal through initilize and declar
        var obj2 = {
            key_1: 22,
            key_2: (a)=>{
                return a;
            }
        };
        console.log(""+obj2.key_1);
        console.log(" "+obj2.key_2(100))

        //Object constructor
        var obj3 = new Object();
        obj3.key__1= 'Object Constructor';
        console.log(obj3.key__1);

        //factory fucntionn
        function obj4(){
            return{
                key___1 : 'Factory Function',
                key___2 : (a)=>{
                    return a;
                }
            };
        };
        var new_obj_created = new obj4();
        document.write(new_obj_created.key___1+" "+new_obj_created.key___2(22))

        //Constructor
        function Constructor(){
            this.key____1 = 'Constructor ';
            this.key____2 = ()=>{
                    console.log(this.key____1+'used');
            };
        };
        var instance_object = new Constructor();
        instance_object.key____2();
