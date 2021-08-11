const fs = require('fs');

const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

function rimraf (path, f = () => f) {
    const filePath = grab('--path');

    fs.rm(filePath, { recursive: true }, (err) => { 
        if (err) { 
            throw err; 
        }  
    }); 
};

module.exports = rimraf;