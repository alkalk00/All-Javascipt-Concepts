
        //Minix or Composition
        //when we create an super class and create sub class of 2 or many
        //all the properties of superclass are inheited to subclasses
        //what if we don't want to use some properties of super class but it would happen in prototoype inheritance
        //so we can use compositions to avoid such menory loass and specif to the code
        //Object.assign is a function that contains targets and sources
        //we can also create mixin function and give parameter to it
        //thoes parameter will act as the target and source
        //we don't need to write such code again and agian
        //Super Class
        var Human = function(){
            
        }
        Human.prototype.eat = function(){
            return "I am eating";
        }
        Human.prototype.walk = function(){
            return " I am walking";
        }
        Human.prototype.talk = function(){
            return "I am taking";
        }
        var obj = new Human();
        //document.write(obj.eat());

        var Animal = function(){
            
        }
        
        //we can inherit these proterties throught Prototype inheritance
        //i.e.
        Animal.prototype = Object.create(Human.prototype);
        Animal.prototype.constructor = Human;

        var ani = new Animal();

        //now we can access the data of Super class to sub class
        console.log(ani.walk()+"<br>");
        console.log(ani.eat());

        //by Composition we can create different types of class and assign it to another object
        //that object will use Object.assign({},sources) to collect the values
        //by use of mixin function we can give parameter as source and target throught spread operator
        //call it to an object

        var eatting ={
            obj_eat : function(){
                return " I am slso eating";
            }
        };

        var walking = {
            obj_walk : function(){
                return "I am also walking";
            }
        };
        //by using object.assign there is target and source which collect the data
        var Souvik = Object.assign({},walking,eatting);
        console.log("<br>"+Souvik.obj_walk()+"<br>"+Souvik.obj_eat());

        //if we want to create similar type of object over and over
        //then we can create an composition function which has specific to all classes

        function Human(){

        }
        //assign the Object.prototye to the properties
        //using constructor 
        Object.assign(Human.prototype, eatting,walking);
        var Rahul = new Human();
        var Souvik = new Human();

        //creates as many as object and uses them to properties that they would like to get assigned
        console.log("<br>"+Rahul.obj_walk());
        console.log("<br>"+Souvik.obj_eat())

        //when we create new object we can add the desire class to assign into it
        var Deep = Object.assign({},eatting);
        console.log("<br>");
        console.log(Deep.obj_eat());
    