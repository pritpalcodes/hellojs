/*
    modular programming is nothing but, breaking your code into chote chote functions to do the stuff,
    so yeah instead of writing all the bhasa in one single file, define & declare those functions in some other file(modules) and call them in  your main file as and when needed! :)

*/ 

//addTwoNums is defined in another "module" named module_math.js
// let sum = addTwoNums(1,2); //using the function without including that module
// console.log(sum); //ReferenceError: addTwoNums is not defined

// to basically kahani itni si h yaar, jaise hum java/python me import krte h, jaise C/C++ me #include karte h, to call in the modules yahan(js me) hum REQUIRE karte h! :) 

// const mera_math_module = require("module_math") //absoulte path nhi dena h, nhi to wo built in modules me refer karegaa,,, hume dena h, mother fucking "Current path"

// const say_hi = require("./module_math.js");
// const addTwoNums_kafuncn = require("./module_math.js");
const mera_math_module = require("./module_math.js")
//lets check out the datatype of mera_math_module.... ye 1 custom library h!!!
// console.log("The module_math exports the following value: ",mera_math_module); //null object
// module.exports="Pritpal" -> when this is exported the above statement returns... Pritpal

//why? where did the addTwoNums() go?
// things is whenever you are creating a funcion, you also have to export it, and then is when, we can use the module really well...
//to function ki value laane k liye, we will first have to export the function from the module that we have created! :)

// console.log("The module_math exports the following value: ",mera_math_module);//Pritpal
// module.exports="Pritpal" -> when this is exported the above statement returns... Pritpal

// let res=addTwoNums(2+3);
// console.log(res); //why do these NOT work and the statement below works... lma


// console.log(`result from the module is ${addTwoNums_kafuncn(2,3)}`); //wahan se hum logo ne function ko export kiya h
console.log(`result from the module is ${mera_math_module.add_fun(2,3)}`); //wahan se hum logo ne function ko export kiya h


//but what if there are more than one function in the module? how are they exported and useDD??
//then export both in an array
mera_math_module.say_hi();



/*
    to kahani itni si h, k you have to create a module, which is basically a bunch of functions defined in another file...
    don't forget to export the functions from that module...
    again, to use the module, import the module using "require" function
*/


// NOTE
/*
    MODULE.EXPORTS aap 1 hi baar kar sakte ho-> nhi to wo overwrite kr dega, and jo last me defined hogi value, use hi use karega
    but exports.funcn , aise kitne bhi functions define kr sakte h!

    which is better?
    depends on the use case, if you have, so to say, micro modular functions, then use export.funcns waala method else use the export module waali cheez!!!
*/



