/*
    how does nodejs works behind the scene?!
        basic client-server architecture
        so how do node.js handles the client request?
        ->something called the event queue:FIFO: First In First Out
        ->then it goes to the Event LOOP(applies FIFO), picks up the requests from the queue safise them
            Event loop processes requests in two ways:-
            *Non-Blocking operations : agar ye wala operation h, to direct request process kari, jo o/p(response) tha wo user ko dediya
            *Blocking operations     : such operations are taken to the thread pool, the task is performed and then the response is generated and returned to the user accordingly...
            what is thread? think of it as a worker,... jo ki baari baari kaam karte h!
            BUT workers to limited hi hote honge na!  

            //synchronous call -> blocking request
// file.writeFileSync("./text.txt","what the fuck, why is the syntax so tough!?");
// file.writeFile("text.txt","Satsri Akal Ji")

//example of sync-blocking call
file.writeFileSync("./contacts.txt","sarthak:1234567890 , pritpal:9876543210")

console.log("1");
let res=file.readFileSync("./contacts.txt", "utf-8")
console.log(res);
console.log("2");
// 1
// sarthak:1234567890 , pritpal:9876543210
// 2
// matlab ye two tb tk execute nhi ho paaya jb tb BLOCKING THREAD(synchronous chunck of code has not been executed completely!)
/*
what happens in a blocking request? or a Synchronous code?
execution is top to bottom and the execution of the remaining programs is BLOCKed only to execute this chunck.... 
after BLOCKING request poori ho jaati h, then you get to run the remaining program
 */


/*
ASYNCHRONOUS CODE - NON-BLOCKING CODE
*/
// console.log("1");
// file.readFile("./contacts.txt", "utf-8",(err,result)=>{
//     console.log(result);
// })
// console.log("2");
// THE ABOVE CODE YEILD THE OUTPUT:
// 1
// 2
// sarthak:1234567890 , pritpal:9876543210

/*
    so it didn't stopped the execution of the ongoing program
 */
//asynchronous call -> async is a non-blocking request!
// file.writeFile("./text.txt","Node js is so easy and I will learn it through and through!",(err)=> {});


/*
    Default thread pool size is 4
    but can you increase it?
    Max? jitne cpu k core h tumhare pass...
    const os= require("os")
    run--> console.log(os.cpus().length);

*/

const os=require("os");
console.log(os.cpus().length);