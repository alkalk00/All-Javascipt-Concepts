
        //Inheritance in class
        //extend word is used in class declaration or class expression to create a class which is child of another
        //class
        //The entends keyword can be used to subclass custom classes as well as built-in Objects
        //built-in objects i.e. DATE,array,string,boolean

        class Parent{
            constructor(sirname,propety){
                this.sirname = sirname;
                this.propety = propety;
            }
            show(){
                    return this.sirname+this.propety;
                }
        }

        var s = new Parent('Acharya ','200 Acres');
        console.log(s.show()+"<br>");

        class Child extends Parent{
            show(){
                return this.sirname+this.propety;
            }
        }

        var c = new Child('Roy','100 Acres');
        console.log(c.show());
        console.log(c.show());
   