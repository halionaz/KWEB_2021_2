const {readdir} = require('fs');

const searchDir = (loc) => {
    readdir(loc, {withFileTypes: true}, (err,files) => {
        if(err){
            console.log("에러가 발생했습니다.");
        } else {
            files.map((file) => {
                if(file.name.slice(-3) === '.js'){
                    console.log(`${loc}/${file.name}`);
                } else if(file.isDirectory()){
                    searchDir(`${loc}/${file.name}`);
                }
            });
        }
    })
};

searchDir(`./test`);