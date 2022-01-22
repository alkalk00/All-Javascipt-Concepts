
        //date
        //it is sofiscated object in javascript and we can manipulate date and time form this object
        //it takes dates and times form user's machine if there is mistake in user's data and time it will
        //also effect the script in browser
        //the months and weekday start with : 0
        //month days start with : 1
        //we can create date using 4 ways:
        var tarik = new Date();
        console.log(tarik);

        //with miliseconds
        var tarik1 = new Date(20093);
        console.log("<br>"+tarik1);

        //minimum 2 max 7 paremeter can be given in date methord
        //new Date(year,month,day,hour,minute,second,milisecond);

        var tarik2 = new Date(2021,2,11,36,33,0);
        console.log("<br>"+tarik2);
        
        //dateString
        var tarik3 = new Date("May 12, 2021 11:22:00");
        console.log("<br>"+tarik3);
         
        //getdate() & setDate()
        var date2 = new Date();
        console.log("<br>Get date: "+date2.getHours()+date2.getMonth()+" "+date2.setHours());

        //short date - MM-DD-YY format
        //we can't wirte 0 before date or month it will produce error
        var tarik4 = new Date("06-03-2001");
        console.log("<br>"+tarik4);

        //long date - MMM-DD-YYYY
        //month and date can be of any order
        //month can be written in full format
        var tarik5 = new Date("March 24 2021");
        console.log("<br>"+tarik5);

        //Methords in dates
        
