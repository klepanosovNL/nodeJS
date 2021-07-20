const rimraf = require('./rimraf/rimraf');
const rename = require('./rename/rename');
const [,, action, path, from, to] = process.argv;

switch(action) {
    case 'rimraf': 
        rimraf(path, err = () => {
            if (err) {
                throw err;
            }
        });

        break;

    case 'rename': 
        rename(err = () => {
            if (err) {
                throw err;
            }
        });

        break;

    default: 
        break;
}
