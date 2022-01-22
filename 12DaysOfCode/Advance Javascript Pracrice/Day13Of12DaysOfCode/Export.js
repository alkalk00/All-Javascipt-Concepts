//Export module concept in ES6

//when we use export default, it should have only one in .js file
//multiple exprort default is not alloweed
//when we import this class in another class then we can give any name to it
//it is not specified that same class name should be given

/*export default class Mobile{
    constructor(a){
        this.a = a;
    }
    display(){
        return this.a;
    }
}
or*/

class Student{
    constructor(){
        this.name= 'Souvik';
    }
    display(para){
        return this.name+para;
    }
}
export default Student;
// we can also use variable to export
// or function

//use can use multiple export using only export
//by using only export and we can use multiple classes to export
//we have to give same name of the class or fucntion or vaiable that we use while 
//exporting the value

/*export class Mobile{
    display(){
        document.write('fucntion');
    }
}
or
*/
class Mobile{
    constructor(){
        this.id = 22;
    }
    display(){
        return this.id;
    };
};
export {Mobile};

export function func(params) {
    return params;
}

//export vaiable
var a = 20;
export {a};
