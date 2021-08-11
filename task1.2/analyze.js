const fs = require('fs'); 
const path = require('path');

async function walkReact (dir, acc = {files: [], folders: []}) {
    for (let file of  await fs.promises.readdir(dir)) {
        const stat = await fs.promises.lstat(path.join(dir, file))
        
        if (stat.isFile()) {

            acc.files.push(file)
        } else if (stat.isDirectory()) {

            acc.folders.push(file)
            await walkReact(path.join(dir, file), acc)            
        } 
    }

    return acc
}

function analyze(callback) {
   walkReact(__dirname)
        .then(async (result) => {
           
            const resultAnalyze = {
                totalFiles: result.files.length,
                totalSubFolders: result.folders.length,
                fileTypesInformation: [
                    {
                        fileExtension: '',
                        fileCount: 0
                    }
                ],
            }   
            const typesInformation = singleExtension(result.files.map(file => getExtension(file)));
            resultAnalyze.fileTypesInformation = typesInformation.map((elem) => ({fileExtension: elem[0], fileCount: elem[1]}));
 
            callback(null, resultAnalyze);
        })
        .catch((error) => callback(error, null))
}

const singleExtension = (extensions) => {
    const names = {}
    extensions.forEach((i) => {
        names[i] = ++names [i] || 1;
    });

    return Object.entries(names);
}

const getExtension = (file) => {
    const ext = file.split('.');
    return ext[ext.length - 1];
}

const getAnalyze = (error, result) => {
    if (error) {
        console.log(error)
    };

    console.log(result)
}

module.exports = { analyze, getAnalyze };