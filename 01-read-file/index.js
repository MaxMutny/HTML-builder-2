// const fs = require('fs');
// const path = require('path');
// let path1 = path.join(__dirname, 'text.txt');


// function reeadAndDisplayFil (filePach)
//     {
//         fs.readFile(filePach, 'utf8', (err, data)=>
//         {
//             if (err)
//               {
//                 console.error('error', err)
//                 return
//               }
//               console.log (data)
//         }
//         )
//     }
//     reeadAndDisplayFil(path1)


const fs = require('fs');
const path = require('path');
const pathTxt = path.join(__dirname, 'text.txt');
const stream = fs.createReadStream(pathTxt, 'utf-8');
let data = '';
stream.on('data', chunk => data += chunk);
stream.on('end', () => console.log(data));
stream.on('error', error => console.log('Error', error.message));





