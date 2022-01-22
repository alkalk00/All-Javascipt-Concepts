
        //String
        //it is built-in object of javascript
        //group of characters are called as string
        //we can form it by 3 ways 
        //1. " " - double qoute
        console.log("Heeloo world<br>");
        var string1 = "Double quote<br>";
        console.log(string1);

        //2. ' ' - single quote
        console.log('Single Quote<br>');
        var sing_qou = 'Single quote<br>';
        console.log(sing_qou);

        //3. ` ` - Backtick
        console.log(`Backtick<br>`);
        var Backtick = `Backtick<br>`;
        console.log(Backtick);

        //we can use double quote inside a double quote and vise varse
        console.log("Hi I am 'Souvik'<br>");
        console.log('Hi I am "Souvik"');

        //+Concat operator
        var name= '<br>souvik';
        console.log(name+" hello");
        var last_name = 'Acharya';
        //by concat 2 variable we can create a new variable
        var full_name = name+" "+last_name;
        console.log(full_name);
        
        //Concat() methord
        var country = "<br>India";
        var State = ' Birbhum';
        var new_location = country.concat(State);
        console.log(new_location)
        var new_location2 = '<br>Suri '.concat(' Birbhum');
        console.log(new_location2);

        //Escape Notaion - 
        //mostly used in console
        //'\n' - new line
        //'\0' - null character
        // \' - single quote
        // \" - dcouble quote
        // \\ - backslach
        // \r - carriage return 
        // \v - vertical tab,
        // \t - tab,
        // \b - backspace,
        // \f - form feed

        //Templates Literals/Template String
        //` ` - Back-tick is different form " " and ' '
        //it has mainly 2 function 
        //1. Multi-line can be achived by `` we don't need to write '\n' for new line
        //this can be achived only in console not in web browser
        var new_tick = `Souvik
how 
    are 
        you?`
        console.log("<br>"+new_tick);
        console.log(new_tick);

        //2. Sting Interpolation
        //these are the placeholder which indicates by dollar and curly braces  ${variable_name}
        //by this we can replace the +concat and use ${variable_name}
        //this is more secure the then " " and ''

        var new_back = '<br>hello';
        var new_new_back = ' world';
        var ano = function(argu_para){
            return argu_para;
        }
        function Constructor(name){
            this.name = name;
            this.key1 = function(){
                return this.name;
            };
        }
        class Sovuik{
            constructor(){
                this.key2 = 'yo';
            }
        }
        var new_class = new Sovuik();
        var ano_obj = new Constructor('souvik');
        console.log(`<br>${new_tick+new_new_back} HA HA HA ${3+3}<br>${ano('Parameter is Passed')}`);
        console.log(`<br>${ano_obj.key1()+ " "+new_class.key2}`)

        //Tagged Template
        //these are advance form of template literal, tags allow you to parse template literals with a function
        //The arguments of a tag template function contains an array of string values. The remaning arguments
        // are related to the expression. In the end, your function can return your manipulated string.\

        //first we declar the variables alongs with values
        //second we create funtion and assign the return statemnent for string
        //in function we declar the parametes first one for the string values 
        //second for all the variables creating tempate interpolation with `${}`;
        //then we return the values in back-tick with interpolation and sting

        //lenght of string
        var len_str = 'hello world';
        console.log("<br>"+len_str.length);

        //charAt() methord
        //return the character from the specific index position of the string
        console.log("<br>"+len_str.charAt(3))

        //charCodeAt() methord
        //return the unique code of the specific index position of string
        console.log("<br>"+len_str.charCodeAt(3));

        //toUpperCase() methord
        //convert lower case to uppercase
        console.log("<br>"+len_str.toUpperCase());

        //toLowerCase() methord
        //opposite of toUpperCase()
        console.log("<br>"+len_str.toLowerCase());

        //trim() methord
        //it removes the white spaces
        var new_trim = 'hello        motto';
        console.log(new_trim);
        console.log("<br>"+new_trim.trim());

        //replace() methord
        //replace the old value to new value
        console.log("<br>"+len_str.replace('hello','gallo'));

        //split() methord
        //it help to split up the string into array format
        //we can manipulate it by the given value bewteen the words like " " , & , or etc;
        //with respective to parameter in split(" ") methord it will seperate the string
        console.log("<br>"+len_str.split(" "));

        //IndexOf() methord
        //takes a value for search and return the index position of the string
        console.log("<br>"+len_str.indexOf('l'));

        //search() methord
        //similar to IndexOf() methord
        console.log*"<br>"+len_str.search('world');

        //slice() methord
        //extracts the part of the string from the given start point to end point told in the parameters
        //if we count form the last we can assign negative value
        console.log("<br>"+len_str.slice(2,8));

        //substring() methord
        //it same like slice() methord but it will not be accessable in negative value
        console.log("<br>"+len_str.substring(2,9));

        //substr() methord
        //it also similar to slice and substring but the second parameter of fucntion tells the lenght of 
        //characters to be printed but in slice and substring we get the end point or last index up to which
        //it will print the value
        console.log("<br>"+len_str.substr(2,4));

   