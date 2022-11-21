

const fs = require('fs');

const folderName = 'public';
console.clear();


fs.mkdirSync(folderName);
console.log(fs.existsSync(folderName));


// const folderpath = `./${folderName}`;

// fs.writeFile('index.html','<h1>hello</h1>',(err) =>{
//     if(err) throw err;
//     console.log('file created');
// });

// let val1 = fs.readdirSync('folder exists');
// console.log(val1);


