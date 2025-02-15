const fs = require("fs");
// sync call
fs.writeFileSync("./test.txt","it is the file created by sarthik khanna with the help of node js");

// async

fs.writeFile("./test.txt","it is the file created by sarthik khanna with the help of node js async",(err)=>{})


   const result= fs.readFileSync("./content.txt","utf-8");
   console.log(result);

// read file async

fs.readFile("./content.txt","utf-8",(err,result)=>{
    if(err){
        console.log("error",err)
    }else{
        console.log(result);
    }
})

// data append in the file 

fs.appendFileSync("./test.txt","hey there\n");


// copy the file 

fs.cpSync("./test.txt","./copy.txt");

// delete the file

fs.unlinkSync("./copy.txt");