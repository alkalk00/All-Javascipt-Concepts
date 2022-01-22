
        //Static Metord
        //Static metord we don't need to create object with the help of Class we can acces it i.e.
        //using class_name and the static methord 
        //static methrod is not related to object or any specific object it is dependent on the classes

        class Souvik{
            constructor(){
                this.name = 'Deep';
            }
            static void_disp(){
                return this.name+": "+22;
            }
        }

        console.log(Souvik.void_disp());

   