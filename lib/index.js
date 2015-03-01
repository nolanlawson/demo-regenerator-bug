"use strict";

function returnAPromise(thing) {
  return Promise.resolve(thing);
}

async function demo() {
  try {
    let things = ['foo', 'bar', 'baz'];

    let promises = things.map((thing) => returnAPromise(thing));

    // this works:
    //
    //let results = [];
    //for (let promise of promises) {
    //  results.push(await promise);
    //}

    let results = [for (promise of promises) await promise];

    console.log('posted many docs simultaneously, results are ', results);
  } catch (err) {
    console.log(err);
  }
}

module.exports = demo;