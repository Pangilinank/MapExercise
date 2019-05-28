// EXERCISE
// Implement the map function.

// TESTS
// All of these should print "true" to verify that the map function is working correctly. Feel free to add your own.

function areArraysEqual(_a, _b) {
  if (Object.prototype.toString.call(_a) != Object.prototype.toString.call([]))
    return false;
  if (_a.length !== _b.length)
    return false;
  for (var i = 0; i < _a.length; i++)
    if (_a[i] !== _b[i])
      return false;
  return true;
}