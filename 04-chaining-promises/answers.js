/**
 *
 * EXERCISE 1
 *
 * @param {Promise} promise
 * @param {function} asyncTransformer
 */
function flatMapPromise(promise, asyncTransformer) {
  return new Promise((resolve, reject) => {
    promise
      .then((val) => {
        try {
          resolve(asyncTransformer(val));
        } catch (error) {
          reject(error);
        }
      })
      .catch((err) => reject(err));
  });
}

/**
 *
 * EXERCISE 2
 *
 * @param {Promise} firstPromise
 * @param {function} slowAsyncProcess
 */
function chainTwoAsyncProcesses(firstPromise, slowAsyncProcess) {
  return firstPromise.then((value) => {
    try {
      return Promise.resolve(slowAsyncProcess(value));
    } catch (error) {
      return Promise.reject(error);
    }
  });
}

/**
 *
 * EXERCISE 3
 *
 * @param {function} getUserById
 * @param {function} getOrganizationById
 */
function makeGetUserByIdWithOrganization(getUserById, getOrganizationById) {
  return function getUserByIdWithOrganization(userId) {
    return getUserById(userId).then((user) => {
      if (user) {
        return getOrganizationById(user.organizationId).then((org) => {
          if (org) {
            return {
              ...user,
              organization: { ...org },
            };
          }
        });
      }
    });
  };
}

module.exports = {
  flatMapPromise,
  chainTwoAsyncProcesses,
  makeGetUserByIdWithOrganization,
};
