
        //Declaration of object 
        //1. Object Literals
        var obj = {};
        //initilize of objects
        obj.key1 = 33;
        obj.key2 = 44;
        obj['key3'] = 55;
        obj["super man"]= "Cleark";
        //throught dot operator
        console.log("obj1: "+obj.key1);
        console.log("obj2: "+obj.key2);
        //throught square braket
        console.log("obj3: "+obj['key3']);
        //multi word can't be used in dot operator so square braket have to do it
        console.log("obj4: "+obj["super man"]);

        //methord in objects
        var obj2 = {};
        obj2.key_methord = function (){
            var i = "Methord";
            return i;
        };
        var met = obj2.key_methord();
        console.log(met);
        
        //declar and initilize at same time
        var obj3 = {
            key_1 : 200,
            key_2 : 400,
            key_3 : 600
        };
        console.log("<br>"+obj3.key_1+" "+obj3.key_2);
        //practive
        var obj4 = {
            key__1 : "hello",
            key__2 : " Souvik",
            key__3 : " Acharya"
        };
        console.log("<br>"+obj4.key__1,obj4.key__2,obj4.key__3)
        
        //if we find that we need to add one more property to the object then we can dynamically add the
        //same process to add the methord in javascript 
        //property in the present line of code i.e.
        obj4.new_key = " New Property added";
        console.log(obj4.new_key);
        console.log(obj4);
        //by this we can write add the property at any line

        //delete property
        //after delete operator, porperty will be undefinded
        delete obj4.key__3;
        //set to be undefinded instead of Acharya
        console.log(obj4.key__1,obj4.key__2+" "+obj4.key__3)
   