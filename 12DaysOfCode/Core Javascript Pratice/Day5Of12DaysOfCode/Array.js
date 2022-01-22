
        //Array is collection of data stored into pirtucalr place
        //In Javascript array is object i.e. built-in object
        //By 2 ways we can create array

        //1. Array Literal
        var Arrays = ["Souvik","Deep","Rahl"];
        console.log(Arrays+" ");
        //I have read array in C already so I knows about it (index value)
        console.log(Arrays[1]);


        //2. Constructor Array
        var geek = new Array("hello ","workd ","souvik"); // enpty array and equal to i.e.evar Array = []

        //access throught index value
        console.log("<br>"+geek[2]);
        //access all the values
        console.log("<br>"+geek)
        // if we write single value in constructor it will see it as the lenght of the array
        var new_arr = Array(14);
        console.log("<br>"+new_arr);
        // so try to avoid constructor array

        //Modify array elements
        geek[0] = "<br>hello - gallo";
        console.log(geek[1]+"<br>");

        //how to delete array elements
        // the lenght does not get less and when we print delete element it    shows undefined
        delete geek[1];
        console.log(geek);

        //lenght of the array
        var new_a = [1,2,3,4,5,6];
        console.log("<br> Lenght: "+new_a.length+"<br>");

        //for loop in array
        var arr_new = ["ram","sam","jadu",3];
        let i;
        var len = arr_new.length;

        for(i=0;i<len;i++){
            console.log(arr_new[i]+"  ")
        }

        //forEach loop in array
        //takes 3 values 
        //1. value - currnet value of array, 2. - array's index number, 3.- the array object the current element belong to
        //values will print the arrays datas and index will print the index of each of them
        console.log("<br>For Each Loop: <br>")
        arr_new.forEach(function(values){
            console.log(values+" ");
        })
        console.log("<br>")
        arr_new.forEach(function(names,index){
            console.log(names+" "+index+"<br>")
        })


        //for Of loop om ES6
        //for every ittration objects we can use these loop
        for(let value of arr_new){
            console.log(value+" ")
        }
        console.log("<br>");
        //Multidimentional Arrays
        var arrays_of_arrays = [[1,". B2B ",'Souvik Acharya'],[2,". B2C ","Deep Acharya"],[3,". B2B ","Vanik Das"]];
        for(let o=0;o<3;o++){
            for(let j=0;j<3;j++){
                console.log(arrays_of_arrays[o][j]);
            }
            console.log("<br>");
        }

        //2D empty array
        var rows = 2;
        var cols = 3;
        var new_arr2 = new Array(rows);
        for(i=0;i<rows;i++){
            new_arr2 = new Array(cols);
        }

        for(o=0;o<rows;o++){
            for(j=0;j<cols;j++){
                console.log(arrays_of_arrays[o][j]);
            }
            console.log("<br>");
        }
    