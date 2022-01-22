
        //Class in Javascript
        //it was introduction in Echascript 2015 or ES6
        //if you not specific a constructor methord a default constructor in used
        //Two ways declar class
        //1. Declar Cla
        //2.Initilisze class

        //Declar class
        class Human{
            constructor(a){
                //Instancce Member
                this.a =a;
                this.show = function(){
                    return "Instance Member";
                }
            }
            //Prototype Member
            display(){
                return "Prototype Member";
            }
        }
        //create the object
        var Object_ = new Human(22);
        //access to Instance member
        console.log(Object_.a+"<br>");
        console.log(Object_.show()+"<br>");
        //access to prototype member
        console.log(Object_.display());

        //this both the Instance and prototype member are originated from Human so both are Instance methord

        //Default Constructor
        //it is not specified to use constructor but if you not use then it will create it's own default one

        class Human2{
            display1(){
                return "<br>NO constructor used";
            }
        }
        var New_Obj = new Human2();
        console.log(New_Obj.display1());

        //2. Class Expression
        //no class name is used so unnamed class is used
        var Mobile = class{
            constructor(name){
                this.name = name;
            }
            print_dis(){
                return this.name;
            }
        }

        var Obj = new Mobile(33);
        console.log("<br>"+Obj.print_dis())
  