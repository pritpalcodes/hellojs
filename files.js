// //import the fs 
// const { log } = require("console")
const file=require("fs")
// // console.log(file)

// //synchronous call -> blocking request
// // file.writeFileSync("./text.txt","what the fuck, why is the syntax so tough!?");
// // file.writeFile("text.txt","Satsri Akal Ji")

// //example of sync-blocking call
// file.writeFileSync("./contacts.txt","sarthak:1234567890 , pritpal:9876543210")

// console.log("1");
// let res=file.readFileSync("./contacts.txt", "utf-8")
// console.log(res);
// console.log("2");

// console.log("1");
// file.readFile("./contacts.txt", "utf-8",(err,result)=>{
//     console.log(result);
// })
// console.log("2");

// file.appendFileSync()//Synchronously append data to a file, creating the file if it does not yet exist. data can be a string or a Buffer. The mode option only affects the newly created file. See open for more details.
// file.copyFile() //Asynchronously copies src to dest. By default, dest is overwritten if it already exists. No arguments other than a possible exception are given to the callback function. Node.js makes no guarantees about the atomicity of the copy operation. If an error occurs after the destination file has been opened for writing, Node.js will attempt to remove the destination.


file.unlinkSync("./text.txt");//to delete the file
