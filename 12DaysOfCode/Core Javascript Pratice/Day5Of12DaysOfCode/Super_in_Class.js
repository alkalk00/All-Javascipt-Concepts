
        //Super in Class
        //Super() is used first to initize parent class constructor. If there is a constructor present in
        //subclass, it need to first call super() before using "this". A constructor can use the super keyword
        //to call the constructor of parent class

        class Parent{
            constructor(money){
                this.money = money;
            }
            showMoneyF(){
                return this.money;
            }
        }

        class Child extends Parent{
            constructor(money){
                //call super class to pass the data form child to parent class
                //if want to call the child class's constructor to parent that can't be possible without Super
                //with the help of super the argument of class is declared but it can be access to parent
                //so super helps it to connect to Parent
                super(money);
            }
            showMoneyS(){
                return this.money;
            }
        }

        var c = new Child(2000);
        console.log("Child Money: "+c.showMoneyS());
        console.log("Parent Money: "+c.showMoneyF());
