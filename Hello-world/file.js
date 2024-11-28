const fs = require('fs');

// file Sync crated :- blocking-requeted
fs.writeFileSync('./test.txt',"Hello World");

// Async  :- Non - blocking -requeted
fs.writeFile('./test.txt',"Hello World Async",(err)=> {});;


// sync Text,binery, simple file : encoding
// const result = fs.readFileSync('./contact.txt',"utf-8")
// console.log(result)


// Async :- callback function aapvo compulsry
// fs.readFile('./contact.txt',"utf-8" , (err,result)=>{
//     if(err){
//         console.log("Erorr", err);
//     }
//     else{
//         console.log(result);
//     }
// })

// fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString())
// fs.appendFileSync("./test.txt",`${Date.now()} hey There\n`)

// copy a file
// fs.cpSync('./test.txt','./copy.txt')

// delete a file 
// fs.unlinkSync("./copy.txt");

// console.log(fs.statSync('./test.txt'))
// console.log(fs.statSync('./test.txt').isFile())

// this mskdiur to folder new creted
// fs.mkdirSync('my-docs')

// fs.mkdirSync("mydocss/a/b",{recursive:true})

