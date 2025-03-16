/**
 *
 * EXERCISE 1
 *
 * @returns {Promise<3>}
 */
function makePromiseResolveWith3() {
  const promise = Promise.resolve(3);
  return promise;
}

/**
 *
 * EXERCISE 2
 *
 * @returns {Promise<,"Boo!">}
 */
function makePromiseRejectWithBoo() {
  const promise = Promise.reject("Boo!");
  return promise;
}

/**
 *
 * EXERCISE 3
 *
 * @param {boolean} itShouldResolve - Whether the promise should resolve or reject
 * @returns {Promise<undefined, undefined>}
 */

function makePromiseWithConstructor(itShouldResolve) {
  return new Promise((resolve, reject) => {
    /* If itShouldResolve is true, call resolve */
    if (itShouldResolve) resolve(itShouldResolve);
    /* If itShouldResolve is false, call reject */
    reject(new Error("itShouldResolve is false."));
  });
}

/**
 *
 * EXERCISE 4
 *
 * @param {any} value
 * @param {number} delayInMs
 * @return {Promise<any>} - A promise that will resolve with the value after delayInMs milliseconds
 */
function makeDelayPromise(value, delayInMs) {
  /* Return a promise that resolves with the value after delayInMs */
  return new Promise((resolve, reject) => {
    if (typeof delayInMs !== "number" || delayInMs < 0) reject("Error");
    setTimeout(() => resolve(value), delayInMs);
  });
}

module.exports = {
  makePromiseResolveWith3,
  makePromiseRejectWithBoo,
  makePromiseWithConstructor,
  makeDelayPromise,
};
