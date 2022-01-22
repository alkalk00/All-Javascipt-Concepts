
        //Concat Methord8
        //to merget two or more array
        var geek = [2,4,"souvik","honda","monda","sonda"];
        var new_geek = geek.concat("deep",33);
        console.log(new_geek);

        //or 
        var geek1 = [2,344,55];
        var geek2 = ["souvik1","deep1","sonic"];
        var new_geek1 = geek1.concat(geek2);
        console.log("<br> New Array: "+new_geek1);

        //Join Methord
        //this methord will replace the all , to whaterver user wants it might be or,/.etc
        var new_geek2 = geek1.join("or");
        console.log("<br>"+new_geek2); //, changed into or
        //so it can be changed to any form and the typeof new_geek2 is string

        //reverse methord
        // it will reverse the array from it present form
        var new_geek3 = geek1.reverse();
        console.log("<br>"+new_geek3);

        //slice methord
        //it has 2 parameters one for start point and another for ending point
        // the ending point is always 1 less
        //if the end value is out of range then it will set to be undefined

        var new_geek4 = geek1.slice(0,2);
        console.log("<br> Slice: "+new_geek4);

        //toString is there already in array so we get , after eatch elements in array
        //so join methord also does the same but we can do change the , to anythng by join
        //it will convert the elements to String

        //Array.isArray to is for conformation of array by returning true 

        //Splice methord
        //it is used for remove or add the elements in array
        //it contians 3 parameters  first for the start point , second for how many elements delete from 
        //start point , third to add values when the items get deleted.

        var geek_arr = [2,4,"souvik","honda","monda","sonda"];
        var new_geek5 = geek_arr.splice(3);
        //delete all the elements form the starting points if there is 1 parameter declared
        console.log("<br>Splice: "+new_geek5)
        //delete element up to the that numbers form the start point if 2 parameter declared
        console.log("<br>Splice2: "+geek_arr.splice(1,1));
        //delete and replace the elements using 3 parameters are declared
        var geek_arr1 = [2,4,"souvik","honda","monda","sonda"];
        console.log("<br>Splice3: "+geek_arr1.splice(3,2,"333","iiii"));

        //IndexOF
        //it will find position of the index element
        var geek_arr6 = geek_arr.indexOf(2);
        console.log("<br>"+geek_arr6);

        //Fill methord
        //fill up the elements form a start point to end point mention in the parameters
        //geek.fill("iiii",1,4);

        //unshift methord
        //it add the elemnts at the end of the array?>
        //and return the lenght of the present array
        var new_geek7 = geek.unshift("deepik","raju");
        // console.log(geek_arr7);

        //push methord 
        //same as unshift methord just this methord add at the end of the array
        //it also return the lenght of present array

        //opposite of unshift methord is shift mehthord
        //it will remove the first element of the array
        //and changes the lenght of the array

        //pop methord
        //it removes the last element of the array
        //it also return the element which it has removed
   