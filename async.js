const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
// fs.readFile을 promise화 시키는 메소드
const printFileSize = async filename => {
    try {
        let data = fs.readFileSync(filename);
        console.log(`Data length 1 : ${data.length} bytes`);
        data = await readFile(filename);
        console.log(`Data length 2 : ${data.length} bytes`);
    } catch (err) {
        console.error(err);
    }
};
console.log('String 1');
printFileSize('./file.bin');
console.log('String 2');