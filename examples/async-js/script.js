/**********************************************************************
 * Callbacks (callback hell) - the asynchronous OG
 **********************************************************************/

// simple setTimeout wrapper.
// callback at end seems more standard (thanks nodejs)
const delayCB = (ms, callback) => setTimeout(callback, ms);

// fairly common callback hell
const delayTestCB = (cb) =>
  delayCB(500, () => {
    console.log("first delay - callback hell");
    delayCB(200, () => {
      console.log("second delay - callback hell");
      delayCB(200, cb);
    });
  });

// test
delayTestCB(() => console.log("done - callback hell"));

/**********************************************************************
 * Promises - asynchronous king
 **********************************************************************/

// See Promise() construtor on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise

// wrap the cumbersome setTimeout callback
const delayPromise = (ms) =>
  // create a promise
  // we only need resolve, no issues expected
  new Promise(
    (resolve) => setTimeout(resolve, ms) // the callback calls the promise resolution
  );

// common promise "then" chain
const delayTestPromise = () =>
  delayPromise(500)
    .then(() => {
      console.log("first delay - promise");
      return delayPromise(200);
    })
    .then(() => {
      console.log("second delay - promise");
      return delayPromise(200);
    });
// test
delayTestPromise().then(() => console.log("done - promise"));

/**********************************************************************
 * Async/await - Promises' more put together sister
 **********************************************************************/

// our async
// note, we've really just wrapped our promise
// because that's at the heart of it all
// (this is the same as above but with async/await applied)
const delayAA = async (ms) =>
  await new Promise((resolve) => setTimeout(resolve, ms));

// now we can pretend promises aren't there
const delayTestAA = async () => {
  await delayAA(500);
  console.log("first delay - async/await");
  await delayAA(200);
  console.log("second delay - async/await");
  await delayAA(200);
};

// test
await delayTestAA();
console.log("done - async/await");
