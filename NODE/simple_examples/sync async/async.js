import fs from 'fs';

fs.readFile(__filename, function cb(err,data){
    console.log(data);
});

console.log('Hi');
