/**
 * Created by kylefang on 4/28/16.
 */


function warn(error) {
  throw error; // To let the caller handle the rejection
}

module.exports = () => next => action => (
  typeof action.then === 'function'
    ? Promise.resolve(action).then(next, warn)
    : next(action)
  );
