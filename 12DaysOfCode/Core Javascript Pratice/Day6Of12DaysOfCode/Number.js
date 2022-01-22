
        //Number
        //Numbers in javascript includes both integer and floting point values. Javascript number are always
        //are always stored as double precion floating point number, following the international IEEE 754

        //Javascrpt also provide an object representation of numbers
        //mainly when we use constructor then the typeOf variable will change from number to object
        //if we write in between " " or ' ' or ` ` then it said to be string
        var num = 33;
        var new_obj = new Number(22);
        var num_str = '22';

        console.log(typeof(num));
        console.log("<br>"+typeof(new_obj));
        console.log("<br>"+typeof(num_str)+"<br>");

        //Number with String
        var a = 20;
        var b = '10';
        var c = 30;
        var d = 'hello';

        //whwn concat is used then we will get addition the values but it only possibble in number to numbers
        //in case of string to number or string to string the concat will just print both the values
        //concat = + 
        //rather then concat other arithmatic sign are flexible and perform arithmatic operation
        //if we give -,*,/ will do their arithmatic operation
        console.log(a+c+" Arithmatic operation<br>")
        console.log(a+b+" concat opearation<br>");

        //-,*,/ does simple arithmatic operaton
        //because only + is the sign which holds the fucntion of concat
        console.log(a-b+" Substration operation<br>");
        console.log(c*b+" Multipication operation<br>");

        //NaN
        //it is said to be NaN - not a number and it is not to anyone even equal to itself
        console.log("<br>"+10-"10");
        //NaN is not equal to itself
        if('hello' == NaN && NaN == NaN){
            console.log("<br>Equal");
        }else{
            console.log("<br>Not Equal");
        }

        //Gloabal is NaN()
        //it is a global number and it check weather it is an illegal number
        //the function return True if it is NaN. otherwise false
        var nan = 22;
        var not_nan = 'souvik';
        if(isNaN(not_nan)){
            console.log('<br>String: true');
        }else{
            console.log('<br>Number: false');
        }
        if(isNaN(nan)){
            console.log('<br>String: true');
        }else{
            console.log('<br>Number: false');
        }

        //toSting() methord - converts number to string and we can use to output in hexadecial or ocal
        var str_new = 22;
        console.log("<br>"+str_new.toString());
        //convert to binary or octqal or hexadeciaml
        console.log("<br>"+str_new.toString(2)) // int ocal - toString(8);

        //toExponential() mehtord
        console.log("<br"+str_new.toExponential(2));

        //toFixed() methord
        //specifies the lenght of the number to string with decimal position
        //tells how many decimal digits are needed after . point
        var fixe_num = 2.30493;
        console.log(fixe_num.toFixed(2));

        //toPrecision() methord
        //same like toFixed()
        //if no digit is declared in methord it will round up the digit
        //it will start count from the first digit
        console.log(fixe_num.toPrecision(4));

        //isInteger() methord
        //tells weather the value is true or false
        console.log(Number.isInteger(fixe_num));
        var is_int = 22;
        console.log(Number.isInteger(is_int));

        //isSafeInteger
        //tells that it's it is integer up  from 2^53-1 to -2^53-1 and returns true

        //parseInt() methord
        //this function parse a string and return an integer
        //it contains 2 parameters one is stirng and another is radix which is used to specity which
        //numeral system to be used, for example , a radix of 16 indeicates that te number in the string
        //should be parsed form a hexadeciaml to deciamal number

        //parseFloat() methord
        //simialar to parseInt() instead of parseFloat()

        //Math
