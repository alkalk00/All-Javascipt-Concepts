//export default -> we can give any name while callng the class form
//another file
//import Mobile form './Export.js' 

//export -> we have to give same name that used in class to export file
//import {Mobile,func} form './Export.js';

//export all the modules form file
//import * as device from './Export';

//using both export default and export 
import Stu,{Mobile,func,a} from './Export.js'
import fun1,{h} from './Import_DOM.js';

var obj = new Stu();
console.log(obj.name);
console.log(obj.display(' Acharya'));
//document can't be used
//document.write(obj.display());

var func_imp = func('function');
console.log(func_imp);
console.log(a);

console.log(fun1(22));

var obj1 = new h();
obj1.display1()