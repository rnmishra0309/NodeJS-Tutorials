const fs = require('fs');
const path = require('path');

// get the current directory name
const dirPath = path.join(__dirname, 'files');

console.log(dirPath)

/*
for(let i=0; i<5; i++) {
    fs.writeFileSync(`${dirPath}\/File${i+1}.txt`, `Hello, I am File${i+1}.txt`);
}*/

// log all the files created above
fs.readdir(dirPath, (error, files) => {
   files.forEach((item) => {
       console.log(`File name is ${item}`);
   });
});

// readFile() = reads the content of the file
// appendFile() = appends the content provided
// rename() = renames the file
// unlinkSync() = deletes the file

/* IMPORTANT

We cannot get the Files from outside the __dirname directory like c drive or d drive
because the current path is served as a server
not the whole windows explorer.

 */
