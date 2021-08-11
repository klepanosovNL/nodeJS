const race = (...promises) =>
    new Promise((res, rej) => {
    promises.forEach(p => p.then(res).catch(rej));
});

const promise1 = new Promise((res, rej) => { setTimeout(res, 100, 'foo') });
const promise2 = new Promise((res, rej) => { setTimeout(res, 200, 'bar') });
const promise3 = new Promise((res, rej) => { setTimeout(rej, 50, 'baz') });


race(promise1, promise2, promise3)
  .then(a => console.log(`A promised resolved! Result is- ${JSON.stringify(a)}`))
  .catch(e => console.log(e));
