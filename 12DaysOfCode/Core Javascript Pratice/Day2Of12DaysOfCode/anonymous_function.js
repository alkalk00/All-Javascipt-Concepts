
        //Anomynous function does't need a name and it called because it has no name
        //the function should be assign to an variable

        //no name in funciton
        var x = function(){
            console.log('Hello Anomymous');
        };
        //called the variable instead of fucntion name
        x();

        //passing the argument and parameter
        var xx = function (x,y){
            console.log(x+" "+y);
        };
        xx('\ndeep and '," Souvik\n");

        //return anomynous funciton
        function fucn(a){
            return function (b){
                return (a+b);
            }
        }
        //when func(22) is written the it contains the return statement of func() i.e fucntion (b){return (a+b)}
        //so it should be sorted in the vairable i.e var eno = fucn(22);
        //then the value of eno is exiticuted as eno() with a argument in it eno(22);
        var ano = fucn(22);
        //reult = 22 + 22 = 44;
        console.log(ano(22));

        //extra
        function a(a){
            console.log('\n a: '+a+" ");
            var extr = function(l){
                return l;
            }
            var olo = extr("\nl: "+33);
            console.log(olo+" ");
            return a;
        };
        var k = a(22);
        console.log("\na: "+k);
        