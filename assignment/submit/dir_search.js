const fs = require('fs');

const searchDir = (loc) => {
    fs.readdir(loc, (err,files) => {
        if(err){
            console.log("에러가 발생했습니다.");
        } else {
            files.map((file) => {
                if(file.slice(-3) === '.js'){
                    console.log(`${loc}/${file}`);
                } else if(file.indexOf('.') === -1){
                    searchDir(`${loc}/${file}`);
                }
            });
        }
    })
};

searchDir(`./test`);