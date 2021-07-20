const fs = require('fs');

const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

function rename(f = () => f) {
    const lastName = grab('--from');
    const newName = grab('--to');

    fs.rename(lastName, newName, err => {
        if (err) {
          throw err
        }
      })
};

module.exports = rename; 