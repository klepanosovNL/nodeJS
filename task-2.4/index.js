const { Transform } = require('stream');

class MapElement extends Transform {
    constructor(char) {
        super();
        this.char = char;
    }

    _transform(chunk, encoding, callback) { 
        const newChunk = chunk.map((value) => value * 2);
        this.push(newChunk);
        callback();
    }
}

const stream = new MapElement(); 

stream.on('data', (value) => { 
    console.log(value);
}); 

stream.on('finish', () => { 
    console.log('All values of the array were processed!'); 
}); 

stream.write('2');
stream.write('4');
stream.write('6');

stream.end(); 
