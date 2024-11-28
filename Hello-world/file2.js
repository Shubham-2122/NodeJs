const fs =  require("fs");
const os = require("os")

console.log(os.cpus().length)

// blocking and non-blocking request

// Blocking reqesut Sync request ...
// console.log('1')
// const result = fs.readFileSync("Contact.txt","utf-8");
// console.log(result);
// console.log('2')

// Non Blocking request Async Request ....
// console.log("1")
// fs.readFile("Contact.txt",'utf-8',(err,result)=>{
//     console.log(result)
// })
// console.log("2")


// defult Thread pool size = 4 
// Max > =- 8 core pc hoy to 8 
//  8 cpu cores hot sake mare 