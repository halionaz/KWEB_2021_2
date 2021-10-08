const {readdir} = require('fs');

const searchDir = (loc) => {
    readdir(loc, {withFileTypes: true}, (err,files) => {
        if(err){
            console.error(err);
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