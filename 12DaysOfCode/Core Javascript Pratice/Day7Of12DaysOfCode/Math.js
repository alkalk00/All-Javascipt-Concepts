
        //Math is an object that have constants and methords which can use for donig more complex
        //calculation and operation. Math object can't be initilized and It can be accessed directly

        console.log(Math.PI);
        console.log(Math.sqrt(11,2).toFixed());
        console.log(Math.log(1));

        //max() and min()
        //tells the maximux and the minimum
        console.log(Math.max(11,33,55,22,66));
        console.log(Math.min(55,44,7,33,22));

        //floor
        //round up the number and take it to the nearest integer in backward
        console.log("Floor: "+Math.floor(2.44));
        console.log("Floor: "+Math.floor(5.66));
        console.log("Floor: "+Math.floor(10.1)+"<br>");

        //round
        //same as floor but if it is .5 then is will roundup and if it is below .5 it will rounddown
        console.log("Round Up: ",Math.round(2.9));
        console.log("Round dwon: ",Math.round(2.3));

        //random
        //gives random number after refresh
        console.log("Random: ",(Math.random()*1000+1).toFixed());
        //naturally it gives in decimal to make it round we can multiply with 10 and add 1
