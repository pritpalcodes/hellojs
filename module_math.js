//function to add two numbers
function addTwoNums(num1, num2){
    return num1 + num2;
}

//another way of defining the function can be:
// exports.add = (a,b) => return a+b;

function subTwoNums(num1,num2){
    return num1-num2;
}

function say_hi() {
    console.log("function has said HI!!!");    
}

// module.exports="Pritpal"; -> poore module ka hi output will be this



// module.exports=addTwoNums;
// module.exports=say_hi;
//when defined like above, tb functions overwite ho rahe h, so what we do instead is that we just define it like below



//instead use javascript objects to return multiple things all at the same time
module.exports={
    add_fun: addTwoNums,
    sun_fun: subTwoNums,
    say_hi: say_hi
}
