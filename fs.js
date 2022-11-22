

const fs = require('fs');

const folderName = 'public';
console.clear();


fs.mkdirSync(folderName);
console.log(fs.existsSync(folderName));




