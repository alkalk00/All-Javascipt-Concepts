
        //IIFE-> Immidate evoled function expression
        //It is callled self executing anomynous function
        (function (){ console.log('hello')})();

        //if a variable is declared under IIFE function the limitation is up to the block scope
        (function (a,b){
            console.log(a+" "+b);
        })(10,20);
        //it call itself no need to call the function
  