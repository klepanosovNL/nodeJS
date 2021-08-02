const asyncOperation = (time) => {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
          resolve(time);
      }, time * 1000);
    });
}

const all = (promises) => {
    const results = [];
    let completedPromises = 0;

    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            promise
                .then((value) => {
                    results[index] = value;
                    completedPromises++;

                    if(completedPromises === promises.length) {
                        resolve(results);
                    }
              }).catch((error) => {
                reject(error);
            });
        });
    });
}

const promises = all([asyncOperation(2), asyncOperation(1), asyncOperation(3)]).then((results) => { 
        console.log(`All promises resolved. Results are - ${JSON.stringify(results)}`); 
    }); ;

