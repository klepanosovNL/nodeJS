const { Readable } = require('stream'); 

const array = ['1', '2', '3', '4', '5', '6'];

class StreamFromArray extends Readable {
    constructor(array) {
        super({encoding: 'utf-8'});

        this.array = array;
        this.index = 0;
    }

    _read() {
        if (this.index <= this.array.length) {
            const item = this.array[this.index];
            this.push(item);
            this.index++;

        } else {
            this.push(null);
        }
    }
}

const stream = new StreamFromArray(array); 

stream.on('data', (value) => console.log(value)); 
stream.on('end', () => console.log('All values of the array were processed!')); 


